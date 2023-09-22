import { Flex, Text } from "@chakra-ui/react"
import { useBalance } from "../../shared/hooks"

export const MyBalance = () => {
  const myBalance = useBalance()

  return (
    <Flex gap={6} backgroundColor="blue.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        My balance:
      </Text>
      <Text fontSize="2xl">{myBalance} XRP</Text>
    </Flex>
  )
}
