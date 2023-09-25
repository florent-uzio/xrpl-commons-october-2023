import { Flex, Text } from "@chakra-ui/react"

type MyBalanceProps = {
  balance: number
}

export const MyBalance = ({ balance }: MyBalanceProps) => {
  return (
    <Flex gap={6} backgroundColor="blue.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        My balance:
      </Text>
      <Text fontSize="2xl">{balance} XRP</Text>
    </Flex>
  )
}
