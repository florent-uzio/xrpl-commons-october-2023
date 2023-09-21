import { Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useWeb3 } from "../../shared/contexts"

export const BorrowedBalance = () => {
  const { currentAccount, getMyBorrowedAmount } = useWeb3()
  const [balance, setBalance] = useState(0)

  const getBalance = async () => {
    const bal = await getMyBorrowedAmount()
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
    <Flex gap={6} backgroundColor="red.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        My borrowed balance:
      </Text>
      <Text fontSize="2xl">{balance ?? "0"} XRP</Text>
    </Flex>
  )
}
