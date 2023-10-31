import { ethers, JsonRpcSigner } from "ethers"
import { createContext, FC, ReactNode, useContext, useEffect, useState } from "react"
import { SimpleBank, SimpleBank__factory } from "../../contracts"
import SimpleBankJson from "../../contracts/contract-address.json"

export type Web3ContextApi = {
  account: string
  connectWallet: () => void
  contract: SimpleBank | null
  disconnect: () => void
  isOwner: boolean
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
  const [isOwner, setIsOwner] = useState(false)

  const { ethereum } = window

  const connectWallet = async () => {
    if (!ethereum) {
      console.error("MetaMask is not installed")
    }

    // Step 1
    // Define a new provider as ethers.BrowserProvider
    // Get the provider's signer
    // Set in state (setSigner)
    const provider = new ethers.BrowserProvider(ethereum)
    const signer = await provider.getSigner()
    setSigner(signer)

    // Step 2 - Connect to MetaMask
    // Request the eth_requestAccounts
    // Get the the first account from the eth_requestAccounts list
    // Set it in state (setAccount)
    const accounts = await ethereum.request({ method: "eth_requestAccounts" })
    const address = accounts[0]
    setAccount(address)

    // Step 3 - Set the contract (setContract) using the signer and the hardhat SimpleBank__factory
    const contractInstance = SimpleBank__factory.connect(SimpleBankJson.address, signer)
    setContract(contractInstance)

    // Step 4 - Check if the connected metamask address is the one that deployed the contract (setIsOwner)
    const owner = await contractInstance.owner()
    setIsOwner(owner === signer.address)
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
    isOwner,
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
