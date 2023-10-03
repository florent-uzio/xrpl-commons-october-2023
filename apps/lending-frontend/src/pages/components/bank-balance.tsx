import { Flex, Text } from "@chakra-ui/react"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useWeb3 } from "../../shared/contexts"
import { useContract } from "../../shared/hooks"

/**
 * Component that renders a simple Text to indicate the bank balance inside the contract.
 */
export const BankBalance = () => {
  const [isOwner, setIsOwner] = useState(false)
  const [balance, setBalance] = useState(0)
  const contract = useContract()
  const {
    state: { signer },
  } = useWeb3()

  useEffect(() => {
    if (!contract) {
      setBalance(0)
      return
    }

    const checkBalance = async () => {
      const rawBalance = await contract.getBankBalance()

      // Format ETH balance and parse it to JS number
      const value = parseFloat(ethers.formatEther(rawBalance))

      setBalance(value)
    }

    // check if the address connected on Metamask is the address that deployed the contract
    const checkOwnership = async () => {
      const owner = await contract.owner()

      if (owner === signer?.address) {
        setIsOwner(true)

        // initially check the balance if the connected address is the one that deployed the contract
        checkBalance()
      } else {
        setIsOwner(false)
      }
    }

    // Initial check if the connected metamask account is the one that deployed the contract
    checkOwnership()

    // check the balance regularly if it's the address that deployed the contract
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
