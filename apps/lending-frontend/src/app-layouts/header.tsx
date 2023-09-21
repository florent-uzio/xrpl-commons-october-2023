import { Button, Flex, Image } from "@chakra-ui/react"
import XrplLogo from "../assets/xrpl-logo.svg"

export const Header = () => {
  return (
    <Flex justifyContent="space-between" p="5" alignItems="center">
      <Image src={XrplLogo} alt="XRP Ledger" height="60px" />
      <Button variant="primary">Connect Wallet</Button>
    </Flex>
  )
}
