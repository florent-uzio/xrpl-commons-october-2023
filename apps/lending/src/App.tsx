// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import { HomePage } from "./pages"

function App() {
  return (
    <MantineProvider>
      <HomePage />
    </MantineProvider>
  )
}

export default App
