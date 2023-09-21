import { createContext, useContext, useEffect, useState } from "react"
// import LendingAddress from '../../contracts/contract-address.json'

type Web3ContextApi = {
  connectWallet: () => void
}

export const Web3Context = createContext<Web3ContextApi>({} as Web3ContextApi)

type Web3ProviderProps = {
  children: React.ReactNode
}

export const Web3Provider: React.FC<Web3ProviderProps> = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("")

  const checkIfWalletIsConnected = async () => {
    if (!window.ethereum) {
      return alert("Please install Metamask")
    }

    const accounts = await window.ethereum.request({ method: "eth_accounts" })

    if (accounts.length) {
      setCurrentAccount(accounts[0])
    } else {
      console.log("No accounts found.")
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  }, [])

  const connectWallet = async () => {
    if (!window.ethereum) {
      return alert("Please install Metamask")
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })

    setCurrentAccount(accounts[0])

    window.location.reload()
  }

  return <Web3Context.Provider value={{ connectWallet }}>{children}</Web3Context.Provider>
}

export const useWeb3 = () => {
  const context = useContext(Web3Context)
  if (!context) {
    throw new Error("useWeb3 must be used inside Web3Provider")
  }
  return context
}
