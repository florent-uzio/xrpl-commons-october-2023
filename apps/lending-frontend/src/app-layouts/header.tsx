import { Button, Flex, Image, Tag } from "@chakra-ui/react"
import XrplLogo from "../assets/xrpl-logo.svg"
import { useWeb3 } from "../shared/contexts"

export const Header = () => {
  const { connectWallet, currentAccount } = useWeb3()

  const onConnectHandler = () => {
    connectWallet()
  }

  return (
    <Flex justifyContent="space-between" p="5" alignItems="center" shadow="lg">
      <Image src={XrplLogo} alt="XRP Ledger" height="60px" />
      {currentAccount === "" ? (
        <Button onClick={onConnectHandler} variant="primary">
          Connect Wallet
        </Button>
      ) : (
        <Tag size="lg">{currentAccount}</Tag>
      )}
    </Flex>
  )
}
