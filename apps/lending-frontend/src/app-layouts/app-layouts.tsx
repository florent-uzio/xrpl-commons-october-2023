import { Header } from "./header"

type AppLayoutProps = {
  children: React.ReactNode
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <>{children}</>
    </>
  )
}
