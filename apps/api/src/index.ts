import { startServer } from "./server"

const port = Number(process.env.PORT) || 5001

startServer(port)
