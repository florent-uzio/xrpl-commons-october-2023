import { Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

export const BorrowedBalance = () => {
  const [balance] = useState(0)

  return (
    <Flex gap={6} backgroundColor="red.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        My loan balance:
      </Text>
      <Text fontSize="2xl">{balance ?? "0"} XRP</Text>
    </Flex>
  )
}
