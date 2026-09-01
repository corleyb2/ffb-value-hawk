import { createRoot } from "react-dom/client"
import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import { QueryClientProvider } from "./providers/query-client"
import { createRouter, RouterProvider } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"

const router = createRouter({
  routeTree,
})

// src/app.tsx
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const App = () => (
  <MantineProvider>
    <QueryClientProvider>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </MantineProvider>
)

createRoot(document.getElementById("app")!).render(<App />)
