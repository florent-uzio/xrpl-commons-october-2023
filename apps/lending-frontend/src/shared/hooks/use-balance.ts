import { ethers } from "ethers"
import { useCallback, useEffect, useRef, useState } from "react"
import { SimpleBank, SimpleBank__factory } from "../../contracts"
import SimpleBankJson from "../../contracts/contract-address.json"
import { useWeb3 } from "../contexts"

// Ethers.js provides functionality to query data from ethereum blockchain.
// We can use `BrowserProvider` class to construct a wrapper for
// web3-compatible provider which we receive from metamask.
const provider = new ethers.BrowserProvider(window.ethereum)

export const useBalance = () => {
  const [balance, setBalance] = useState(0)
  const [bankBalance, setBankBalance] = useState(0)
  const [loanBalance, setLoanBalance] = useState(0)
  // previous balance value
  const prevBalanceRef = useRef(0)
  const prevBankBalanceRef = useRef(0)
  const prevLoanBalanceRef = useRef(0)
  const { isOwner } = useWeb3()

  const fetchBalance = useCallback(async () => {
    // Signer represents ethereum wallet in ethers.js. You cannot just send
    // transactions with only provider, you will need signer (wallet) for this.
    const signer = await provider.getSigner()

    const contract = SimpleBank__factory.connect(SimpleBankJson.address, signer)

    getMyBalance(contract)

    if (isOwner) {
      getBankBalance(contract)
    }

    getLoanBalance(contract)
  }, [isOwner])

  const getMyBalance = useCallback(async (contract: SimpleBank) => {
    const rawBalance = await contract.getBalance()

    // Format ETH balance and parse it to JS number
    const value = parseFloat(ethers.formatEther(rawBalance))

    if (value !== prevBalanceRef.current) {
      prevBalanceRef.current = value
      setBalance(value)
    }
  }, [])

  const getLoanBalance = useCallback(async (contract: SimpleBank) => {
    const rawBalance = await contract.getLoanAmount()

    // Format ETH balance and parse it to JS number
    const value = parseFloat(ethers.formatEther(rawBalance))

    if (value !== prevBalanceRef.current) {
      prevLoanBalanceRef.current = value
      setLoanBalance(value)
    }
  }, [])

  const getBankBalance = useCallback(async (contract: SimpleBank) => {
    const rawBalance = await contract.getBankBalance()

    // Format ETH balance and parse it to JS number
    const value = parseFloat(ethers.formatEther(rawBalance))

    if (value !== prevBankBalanceRef.current) {
      prevBankBalanceRef.current = value
      setBankBalance(value)
    }
  }, [])

  useEffect(() => {
    // Call the function initially
    fetchBalance()

    // Fetch user balance on each block
    provider.on("block", fetchBalance)

    // Cleanup function is used to unsubscribe from 'block' event and prevent
    // a possible memory leak in your application.
    return () => {
      provider.off("block", fetchBalance)
    }
  }, [fetchBalance])

  return {
    balance,
    bankBalance,
    loanBalance,
  }
}
