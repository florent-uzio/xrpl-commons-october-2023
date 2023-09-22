import { createContext, useContext, useEffect, useState } from "react"

type Web3ContextApi = {
  connectWallet: () => void
  currentAccount: string
  // deposit: (amount: string) => void
  // getMyBalance: () => Promise<string | undefined>
  // lend: (amount: string, borrower: string) => Promise<void>
  // getMyBorrowedAmount: () => Promise<string | undefined>
  // repay: (lender: string, amount: string) => Promise<void>
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

  // const deposit = async (amount: string) => {
  //   if (!window.ethereum) return

  //   const provider = new ethers.BrowserProvider(window.ethereum)
  //   const signer = await provider.getSigner()

  //   const lendingContract = Lending__factory.connect(LendingAddress.Lending, signer)

  //   await lendingContract.deposit({ value: ethers.parseEther(amount) })
  // }

  // const lend = async (amount: string, borrower: string) => {
  //   if (!window.ethereum) return

  //   const provider = new ethers.BrowserProvider(window.ethereum)
  //   const signer = await provider.getSigner()

  //   const lendingContract = Lending__factory.connect(LendingAddress.Lending, signer)

  //   const convertedAmount = ethers.parseEther(amount)

  //   await lendingContract.lend(borrower, ethers.toBigInt(convertedAmount))
  // }

  // const getMyBalance = async () => {
  //   if (!window.ethereum) return
  //   const provider = new ethers.BrowserProvider(window.ethereum)
  //   const signer = await provider.getSigner()

  //   const lendingContract = Lending__factory.connect(LendingAddress.Lending, signer)

  //   const balance = await lendingContract.getMyBalance()

  //   const depositedBal = ethers.formatUnits(balance, "ether")
  //   return depositedBal
  // }

  // const getMyBorrowedAmount = async () => {
  //   if (!window.ethereum) return
  //   const provider = new ethers.BrowserProvider(window.ethereum)
  //   const signer = await provider.getSigner()

  //   const lendingContract = Lending__factory.connect(LendingAddress.Lending, signer)

  //   const borrowedBalance = await lendingContract.getMyBorrowedBalance()

  //   const borrowedBal = ethers.formatUnits(borrowedBalance, "ether")
  //   return borrowedBal
  // }

  // const repay = async (lender: string, amount: string) => {
  //   if (!window.ethereum) return
  //   const provider = new ethers.BrowserProvider(window.ethereum)
  //   const signer = await provider.getSigner()

  //   const lendingContract = Lending__factory.connect(LendingAddress.Lending, signer)

  //   const convertedAmount = ethers.parseEther(amount)
  //   await lendingContract.repay(lender, convertedAmount)
  // }

  return (
    <Web3Context.Provider
      value={{
        connectWallet,
        currentAccount,
        // deposit,
        // getMyBalance,
        // getMyBorrowedAmount,
        // lend,
        // repay,
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
