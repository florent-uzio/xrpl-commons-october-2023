import { Flex, Text } from "@chakra-ui/react"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useWeb3 } from "../../shared/contexts"

/**
 * Component that renders a simple Text to indicate the bank balance inside the contract.
 */
export const BankBalance = () => {
  const [balance, setBalance] = useState(0)
  const { contract } = useWeb3()

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

    // check the balance regularly if it's the address that deployed the contract
    const interval = setInterval(() => {
      checkBalance()
    }, 3000)

    return () => clearInterval(interval)
  }, [contract])

  return (
    <Flex gap={6} backgroundColor="green.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        Bank balance:
      </Text>
      <Text fontSize="2xl">{`${balance} XRP`}</Text>
    </Flex>
  )
}
