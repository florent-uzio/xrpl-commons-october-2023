import { Flex, Text } from "@chakra-ui/react"
import { useWeb3 } from "../../shared/contexts"

type BankBalanceProps = {
  balance: number
}

export const BankBalance = ({ balance }: BankBalanceProps) => {
  const { isOwner } = useWeb3()

  return (
    <Flex gap={6} backgroundColor="green.50" p="5" borderRadius="2xl">
      <Text fontSize="2xl" as="b">
        Bank balance:
      </Text>
      <Text fontSize="2xl">{isOwner ? `${balance} XRP` : "You are not the bank"}</Text>
    </Flex>
  )
}
