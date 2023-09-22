import { ethers } from "ethers"
import { useCallback, useEffect, useRef, useState } from "react"
import { SimpleBank__factory } from "../../contracts"
import SimpleBank from "../../contracts/contract-address.json"

// Ethers.js provides functionality to query data from ethereum blockchain.
// We can use `BrowserProvider` class to construct a wrapper for
// web3-compatible provider which we receive from metamask.
const provider = new ethers.BrowserProvider(window.ethereum)

export const useBalance = () => {
  const [balance, setBalance] = useState(0)
  // previous balance value
  const prevBalanceRef = useRef(0)

  const fetchBalance = useCallback(async () => {
    // Signer represents ethereum wallet in ethers.js. You cannot just send
    // transactions with only provider, you will need signer (wallet) for this.
    const signer = await provider.getSigner()

    const contract = SimpleBank__factory.connect(SimpleBank.address, signer)

    const rawBalance = await contract.getBalance()

    // Format ETH balance and parse it to JS number
    const value = parseFloat(ethers.formatEther(rawBalance))

    // Optimization: check that user balance has actually changed before
    // updating state and triggering the consuming component re-render
    if (value !== prevBalanceRef.current) {
      prevBalanceRef.current = value
      setBalance(value)
    }
  }, [])

  useEffect(() => {
    fetchBalance()
  }, [fetchBalance])

  useEffect(() => {
    // Fetch user balance on each block
    provider.on("block", fetchBalance)

    // Cleanup function is used to unsubscribe from 'block' event and prevent
    // a possible memory leak in your application.
    return () => {
      provider.off("block", fetchBalance)
    }
  }, [fetchBalance])

  return balance
}
