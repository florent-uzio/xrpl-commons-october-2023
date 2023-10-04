import { ethers, JsonRpcSigner } from "ethers"
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react"
import { SimpleBank, SimpleBank__factory } from "../../contracts"
import SimpleBankJson from "../../contracts/contract-address.json"

export type Web3ContextApi = {
  account: string
  connectWallet: () => void
  contract: SimpleBank | null
  disconnect: () => void
  signer: JsonRpcSigner | null
}

const Web3Context = createContext<Web3ContextApi | null>(null)

type Props = {
  children: ReactNode
}

export const Web3Provider: FC<Props> = ({ children }) => {
  const [account, setAccount] = useState("")
  const [contract, setContract] = useState<SimpleBank | null>(null)
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null)

  const { ethereum } = window

  const connectWallet = async () => {
    if (!ethereum) {
      console.error("MetaMask is not installed")
    }

    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner()
    setSigner(signer)

    // Connect to MetaMask
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
    const address = accounts[0]
    setAccount(address)

    // Set the contract using the signer
    const contractInstance = SimpleBank__factory.connect(SimpleBankJson.address, signer)
    setContract(contractInstance)
  }

  const disconnect = () => {
    setAccount("")
    setSigner(null)
    setContract(null)
  }

  useEffect(() => {
    if (ethereum) {
      ethereum.on("accountsChanged", () => {
        disconnect()
        connectWallet()
      })
    }
  }, [ethereum])

  const value = {
    account,
    connectWallet,
    contract,
    disconnect,
    signer,
  }

  return <Web3Context.Provider value={value}>{children}</Web3Context.Provider>
}

export const useWeb3 = () => {
  const context = useContext(Web3Context)
  if (!context) {
    throw new Error("useWeb3 must be used inside Web3Provider")
  }
  return context
}
