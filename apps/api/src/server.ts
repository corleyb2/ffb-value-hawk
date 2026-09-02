import { SignalConstants } from "node:os"
import { app } from "./app"

type ShutdownSignalConst = keyof Pick<SignalConstants, "SIGTERM" | "SIGINT">

export function startServer(port: number) {
  const server = app.listen(port, () => {
    console.log(`🚀 API server running on http://localhost:${port}`)
  })

  /**
   * WHAT:
   * Gracefully shut the HTTP server down when the process is asked to stop.
   *
   * WHY:
   * Something outside this process decides when we stop and tells us with a
   * signal:
   *   - `node --watch` (our dev script) sends SIGTERM on every file save so it
   *     can restart us with the new code.
   *   - Ctrl+C in the terminal sends SIGINT.
   *   - In prod, an orchestrator (Docker, systemd, k8s, a process manager) sends
   *     SIGTERM before it force-kills with SIGKILL.
   *
   * With no handler, Node exits instantly: in-flight requests are cut off, and
   * the dev watcher sometimes can't confirm we exited in time and has to
   * force-kill us — the source of the
   * "Previous process hasn't exited yet. Force killing..." log noise.
   *
   * HOW:
   * 1. `server.close(cb)` stops accepting new connections and runs `cb` once
   *    every existing connection has finished and closed.
   * 2. `server.closeAllConnections()` ends sockets that are just sitting idle.
   *    Browsers and dev proxies (e.g. Vite) hold HTTP keep-alive connections
   *    open, so without this the `close()` callback may never fire and we hang
   *    until something force-kills us.
   *
   * The two calls are a pair: `close()` arms the "we're done" callback,
   * `closeAllConnections()` clears the idle sockets that would otherwise block
   * it. Active requests still get to finish.
   *
   * @param {ShutdownSignalConst} signal - the signal that triggered shutdown;
   *   used only for logging
   */
  function handleShutdown(signal: ShutdownSignalConst) {
    console.log(`Received shutdown signal ${signal}, shutting down...`)

    // Stops accepting new connections
    server.close(() => {
      console.log("All remaining connections drained. Exiting.")
      process.exit(0)
    })

    // Stops all persistent "keep-alive" and otherwise idle connections
    server.closeAllConnections()
  }

  process.on("SIGTERM", () => handleShutdown("SIGTERM"))
  process.on("SIGINT", () => handleShutdown("SIGINT"))

  return server
}
