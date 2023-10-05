import { Flex, Text } from "@chakra-ui/react"
import { ethers } from "ethers"
import { useEffect, useState } from "react"
import { useWeb3 } from "../../shared/contexts"

/**
 * Component that renders a simple Text to indicate the amount of XRP borrowed from the bank.
 */
export const BorrowedBalance = () => {
  const [balance, setBalance] = useState(0)
  const { contract } = useWeb3()

  useEffect(() => {
    const checkBalance = async () => {
      if (!contract) {
        setBalance(0)
        return
      }

      const rawBalance = await contract.getLoanAmount()

      // Format ETH balance and parse it to JS number
      const value = parseFloat(ethers.formatEther(rawBalance))

      setBalance(value)
    }

    // chech the balance initially
    checkBalance()

    // check the balance regularly
    const interval = setInterval(() => {
      checkBalance()
    }, 2900)

    return () => clearInterval(interval)
  }, [contract])

  return (
    <Flex gap={6} backgroundColor="red.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        My loan balance:
      </Text>
      <Text fontSize="2xl">{balance ?? "0"} XRP</Text>
    </Flex>
  )
}
