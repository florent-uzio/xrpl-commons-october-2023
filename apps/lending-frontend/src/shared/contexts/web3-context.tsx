import { ToastId } from "@chakra-ui/react"
import { createContext, FC, ReactNode, useContext } from "react"
import { useWeb3State, Web3State } from "../hooks"

export type Web3ContextApi = {
  connectWallet: () => Promise<ToastId | undefined>
  disconnect: () => void
  state: Web3State
}

const Web3Context = createContext<Web3ContextApi | null>(null)

type Props = {
  children: ReactNode
}

export const Web3Provider: FC<Props> = ({ children }) => {
  const { connectWallet, disconnect, state } = useWeb3State()

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        disconnect,
        state,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export const useWeb3 = () => {
  const context = useContext(Web3Context)
  if (!context) {
    throw new Error("useWeb3 must be used inside Web3Provider")
  }
  return context
}
