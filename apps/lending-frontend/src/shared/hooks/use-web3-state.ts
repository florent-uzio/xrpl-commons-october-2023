import { useToast } from "@chakra-ui/react"
import { BrowserProvider, ethers, JsonRpcSigner } from "ethers"
import { useCallback, useEffect, useState } from "react"

export type Web3State = {
  address: string | null
  currentChain: number | null
  signer: JsonRpcSigner | null
  provider: BrowserProvider | null
  isAuthenticated: boolean
}
const initialWeb3State = {
  address: null,
  currentChain: null,
  signer: null,
  provider: null,
  isAuthenticated: false,
}

export const useWeb3State = () => {
  const toast = useToast()
  const [state, setState] = useState<Web3State>(initialWeb3State)

  const connectWallet = useCallback(async () => {
    if (state.isAuthenticated) return
    console.log("Con")
    try {
      const { ethereum } = window

      if (!ethereum) {
        return toast({
          status: "error",
          title: "Error",
          description: "No ethereum wallet found, install Metamask",
        })
      }

      const provider = new ethers.BrowserProvider(ethereum)
      // https://docs.metamask.io/wallet/reference/rpc-api/
      const accounts: string[] = await ethereum.request({ method: "eth_requestAccounts" })

      if (accounts.length > 0) {
        const signer = await provider.getSigner()
        const chain = Number((await provider.getNetwork()).chainId)
        setState({
          ...state,
          address: accounts[0],
          signer,
          currentChain: chain,
          provider,
          isAuthenticated: true,
        })

        localStorage.setItem("isAuthenticated", "true")
      }
    } catch (err) {
      console.log(err)
    }
  }, [state, toast])

  // const updateConnectionInfo = useCallback(() => {

  // }, [])

  const disconnect = () => {
    setState(initialWeb3State)
    localStorage.removeItem("isAuthenticated")
  }

  useEffect(() => {
    if (window == null) return

    if (localStorage.hasOwnProperty("isAuthenticated")) {
      connectWallet()
    }
  }, [connectWallet, state.isAuthenticated])

  useEffect(() => {
    if (typeof window.ethereum === "undefined") return

    window.ethereum.on("accountsChanged", async (accounts: string[]) => {
      setState((current) => ({ ...current, address: accounts[0], isAuthenticated: false }))
    })

    window.ethereum.on("chainChanged", (network: string) => {
      setState((current) => ({ ...current, currentChain: Number(network), isAuthenticated: false }))
    })

    return () => {
      window.ethereum.removeAllListeners()
    }
  }, [state])

  return {
    connectWallet,
    disconnect,
    state,
  }
}
