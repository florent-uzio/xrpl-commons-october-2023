import { theme } from "@chakra-ui/pro-theme"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import "@fontsource-variable/open-sans"
import "@fontsource-variable/spline-sans"
import { AppLayout } from "./app-layouts"
import { HomePage } from "./pages"
import { Web3Provider } from "./shared/contexts"

export const App = () => {
  const proTheme = extendTheme(theme)
  const extenstion = {
    colors: { ...proTheme.colors, brand: proTheme.colors.blue },
  }

  const myTheme = extendTheme(extenstion, proTheme)

  return (
    <ChakraProvider theme={myTheme}>
      <Web3Provider>
        <AppLayout>
          <HomePage />
        </AppLayout>
      </Web3Provider>
    </ChakraProvider>
  )
}
