import { ToastId } from "@chakra-ui/react"
import { createContext, FC, ReactNode, useContext } from "react"
import { IWeb3State, useWeb3Provider } from "../hooks"

export interface IWeb3Context {
  connectWallet: () => Promise<ToastId | undefined>
  disconnect: () => void
  state: IWeb3State
}

const Web3Context = createContext<IWeb3Context | null>(null)

type Props = {
  children: ReactNode
}

export const Web3Provider: FC<Props> = ({ children }) => {
  const { connectWallet, disconnect, state } = useWeb3Provider()

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
