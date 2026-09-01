import { createRoot } from "react-dom/client"
import "@mantine/core/styles.css"
import { MantineProvider } from "@mantine/core"
import { Home } from "./views"
import { QueryClientProvider } from "./providers/query-client"

const App = () => (
  <MantineProvider>
    <QueryClientProvider>
      {/* TODO: test components - to remove */}
      <Home />
    </QueryClientProvider>
  </MantineProvider>
)

createRoot(document.getElementById("app")!).render(<App />)
