import { Flex, Text } from "@chakra-ui/react"
import { useBalance } from "../../shared/hooks"

export const BorrowedBalance = () => {
  const { loanBalance } = useBalance()

  return (
    <Flex gap={6} backgroundColor="red.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        My loan balance:
      </Text>
      <Text fontSize="2xl">{loanBalance ?? "0"} XRP</Text>
    </Flex>
  )
}
