import { Button, Container, Flex, Heading, Text } from "@chakra-ui/react"
import { useWeb3 } from "../shared/contexts"
import { BankBalance, BorrowedBalance, Deposit, Lend, Repay } from "./components"

export const HomePage = () => {
  const { contract, isOwner } = useWeb3()

  const onWithdrawHandler = async () => {
    if (!contract) return
    await contract.withdraw()
  }

  if (!contract) {
    return (
      <Container>
        <Flex py="20" gap="8" justifyContent="center" alignItems="center">
          <Text>Connect Metamask</Text>
        </Flex>
      </Container>
    )
  }

  return (
    <Container>
      <Flex direction="column" py="20" gap="8" justifyContent="center" alignItems="center">
        <Heading size="xl">Lend and Repay</Heading>
        {isOwner ? (
          <Flex gap={4} alignItems="center">
            <BankBalance />
            <Button variant="outline" onClick={onWithdrawHandler}>
              Withdraw
            </Button>
          </Flex>
        ) : (
          <BorrowedBalance />
        )}
        {isOwner ? (
          <Deposit />
        ) : (
          <Flex gap={4}>
            <Lend />
            <Repay />
          </Flex>
        )}
      </Flex>
    </Container>
  )
}
