import { Container, Flex, Heading } from "@chakra-ui/react"
import { useBalance } from "../shared/hooks"
import { BankBalance, BorrowedBalance, Deposit, Lend, MyBalance, Repay } from "./components"

export const HomePage = () => {
  const { balance, bankBalance, loanBalance } = useBalance()
  console.log("RENDER HOME")
  return (
    <Container>
      <Flex direction="column" py="20" gap="8" justifyContent="center" alignItems="center">
        <Heading size="xl">Lend and Repay</Heading>
        <Flex gap={4}>
          <BankBalance balance={bankBalance} />
          <MyBalance balance={balance} />
          <BorrowedBalance balance={loanBalance} />
        </Flex>
        <Flex gap={3}>
          <Deposit />
          <Lend />
          <Repay />
        </Flex>
      </Flex>
    </Container>
  )
}
