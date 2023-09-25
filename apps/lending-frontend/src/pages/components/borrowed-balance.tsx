import { Flex, Text } from "@chakra-ui/react"

type BorrowedBalanceProps = {
  balance: number
}

export const BorrowedBalance = ({ balance }: BorrowedBalanceProps) => {
  return (
    <Flex gap={6} backgroundColor="red.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        My loan balance:
      </Text>
      <Text fontSize="2xl">{balance ?? "0"} XRP</Text>
    </Flex>
  )
}
