import { createRoot } from "react-dom/client";
import '@mantine/core/styles.css';
import { MantineProvider } from "@mantine/core";
import {Home} from "./views";

const App = () => (
  <MantineProvider>
    <Home />
  </MantineProvider>

);

createRoot(document.getElementById("app")!).render(<App />);
