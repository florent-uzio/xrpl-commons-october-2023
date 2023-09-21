import { Container, Flex, Heading } from "@chakra-ui/react"
import { Deposit, MyBalance } from "./components"

export const HomePage = () => {
  return (
    <Container>
      <Flex direction="column" py="20" gap="8" justifyContent="center" alignItems="center">
        <Heading size="xl">Lend and Repay</Heading>
        <MyBalance />
        <Flex>
          <Deposit />
        </Flex>
      </Flex>
    </Container>
  )
}
