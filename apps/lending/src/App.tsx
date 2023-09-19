// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"

function App() {
  return <MantineProvider>{/* Your app here */}</MantineProvider>
}

export default App
