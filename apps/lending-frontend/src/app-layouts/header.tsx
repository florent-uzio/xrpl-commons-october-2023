import { Button, Flex, Image, Tag } from "@chakra-ui/react"
import XrplLogo from "../assets/xrpl-logo.svg"
import { useWeb3 } from "../shared/contexts"

export const Header = () => {
  const {
    connectWallet,
    disconnect,
    state: { isAuthenticated, address },
  } = useWeb3()

  const onConnectHandler = () => {
    connectWallet()
  }

  const onDisconnectHandler = () => {
    disconnect()
  }

  return (
    <Flex justifyContent="space-between" p="5" alignItems="center" shadow="lg">
      <Image src={XrplLogo} alt="XRP Ledger" height="60px" />
      {!isAuthenticated ? (
        <Button onClick={onConnectHandler} variant="primary">
          Connect Wallet
        </Button>
      ) : (
        <Flex alignItems="center" gap={3}>
          <Tag size="lg">{address}</Tag>
          <Button size="xs" onClick={onDisconnectHandler} variant="outline">
            Disconnect Wallet
          </Button>
        </Flex>
      )}
    </Flex>
  )
}
