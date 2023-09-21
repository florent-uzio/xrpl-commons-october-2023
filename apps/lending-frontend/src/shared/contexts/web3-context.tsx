import { ethers } from "ethers"
import { createContext, useContext, useEffect, useState } from "react"
import { Lending__factory } from "../../contracts"
import LendingAddress from "../../contracts/contract-address.json"

type Web3ContextApi = {
  connectWallet: () => void
  currentAccount: string
  deposit: (amount: number) => void
  getMyBalance: () => Promise<bigint | undefined>
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

  // Update account address when changing account in metamask
  window.ethereum.on("accountsChanged", function (accounts: any) {
    setCurrentAccount(accounts[0])
  })

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

  const deposit = async (amount: number) => {
    if (!window.ethereum) return
    const provider = new ethers.BrowserProvider(window.ethereum)

    const lendingContract = Lending__factory.connect(LendingAddress.Lending, provider)

    await lendingContract.deposit({ value: amount })
  }

  const getMyBalance = async () => {
    if (!window.ethereum) return
    const provider = new ethers.BrowserProvider(window.ethereum)

    const lendingContract = Lending__factory.connect(LendingAddress.Lending, provider)

    return lendingContract.getMyBalance()
  }

  return (
    <Web3Context.Provider value={{ connectWallet, currentAccount, deposit, getMyBalance }}>
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
