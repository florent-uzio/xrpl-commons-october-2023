import { useToast } from "@chakra-ui/react"
import { BrowserProvider, ethers, JsonRpcSigner } from "ethers"
import { useCallback, useEffect, useState } from "react"

export interface IWeb3State {
  address: string | null
  currentChain: number | null
  signer: JsonRpcSigner | null
  provider: BrowserProvider | null
  isAuthenticated: boolean
}

export const useWeb3Provider = () => {
  const initialWeb3State = {
    address: null,
    currentChain: null,
    signer: null,
    provider: null,
    isAuthenticated: false,
  }

  const toast = useToast()
  const [state, setState] = useState<IWeb3State>(initialWeb3State)

  const connectWallet = useCallback(async () => {
    if (state.isAuthenticated) return

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
      const accounts: string[] = await ethereum.request({ method: "eth_accounts" }) // await provider.send("eth_accounts", [])

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

    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      setState({ ...state, address: accounts[0] })
    })

    window.ethereum.on("chainChanged", (network: string) => {
      setState({ ...state, currentChain: Number(network) })
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
