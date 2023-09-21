import { Container, Flex, Heading } from "@chakra-ui/react"
import { BorrowedBalance, Deposit, Lend, MyBalance } from "./components"

export const HomePage = () => {
  return (
    <Container>
      <Flex direction="column" py="20" gap="8" justifyContent="center" alignItems="center">
        <Heading size="xl">Lend and Repay</Heading>
        <Flex gap={4}>
          <MyBalance />
          <BorrowedBalance />
        </Flex>
        <Flex gap={3}>
          <Deposit />
          <Lend />
        </Flex>
      </Flex>
    </Container>
  )
}
