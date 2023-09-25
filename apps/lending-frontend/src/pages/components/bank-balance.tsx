import { Flex, Text } from "@chakra-ui/react"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useWeb3 } from "../../shared/contexts"
import { useContract } from "../../shared/hooks"

export const BankBalance = () => {
  const [isOwner, setIsOwner] = useState(false)
  const [balance, setBalance] = useState(0)
  const contract = useContract()
  const {
    state: { signer },
  } = useWeb3()

  useEffect(() => {
    const checkOwnership = async () => {
      if (!contract) return

      const owner = await contract.owner()

      if (owner === signer?.address) {
        setIsOwner(true)
      } else {
        setIsOwner(false)
      }
    }

    checkOwnership()
  }, [contract])

  useEffect(() => {
    const checkBalance = async () => {
      if (!contract) return

      const rawBalance = await contract.getBankBalance()

      // Format ETH balance and parse it to JS number
      const value = parseFloat(ethers.formatEther(rawBalance))

      setBalance(value)
    }

    const interval = setInterval(() => {
      if (isOwner) {
        checkBalance()
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [contract, isOwner])

  return (
    <Flex gap={6} backgroundColor="green.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        Bank balance:
      </Text>
      <Text fontSize="2xl">{isOwner ? `${balance} XRP` : "You are not the bank"}</Text>
    </Flex>
  )
}
