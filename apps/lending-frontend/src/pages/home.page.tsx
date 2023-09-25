import { Container, Flex, Heading } from "@chakra-ui/react"
import { BankBalance, BorrowedBalance, Deposit, Lend, MyBalance, Repay } from "./components"

export const HomePage = () => {
  return (
    <Container>
      <Flex direction="column" py="20" gap="8" justifyContent="center" alignItems="center">
        <Heading size="xl">Lend and Repay</Heading>
        <Flex gap={4}>
          <BankBalance />
          <MyBalance />
          <BorrowedBalance />
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
