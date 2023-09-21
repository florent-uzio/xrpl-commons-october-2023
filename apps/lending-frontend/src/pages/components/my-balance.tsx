import { Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useWeb3 } from "../../shared/contexts"

export const MyBalance = () => {
  const { getMyBalance, currentAccount } = useWeb3()
  const [balance, setBalance] = useState(0)

  const getBalance = async () => {
    const bal = await getMyBalance()
    if (bal) {
      setBalance(Number(bal))
    }
  }
  useEffect(() => {
    if (!currentAccount) return
    const interval = setInterval(() => {
      getBalance()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [currentAccount])

  return (
    <Flex gap={6} backgroundColor="blue.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        My deposited balance:
      </Text>
      <Text fontSize="2xl">{balance ?? "0"} XRP</Text>
    </Flex>
  )
}
