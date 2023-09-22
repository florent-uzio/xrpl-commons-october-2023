import { Flex, Text } from "@chakra-ui/react"
import { useWeb3 } from "../../shared/contexts"
import { useBalance } from "../../shared/hooks"

export const BankBalance = () => {
  const { bankBalance } = useBalance()
  const { isOwner } = useWeb3()

  return (
    <Flex gap={6} backgroundColor="green.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        Bank balance:
      </Text>
      <Text fontSize="2xl">{isOwner ? `${bankBalance} XRP` : "You are not the bank"}</Text>
    </Flex>
  )
}
