import { Client } from "xrpl"

// https://xrpl.org/public-servers.html
const networks = {
  RIPPLE_TESTNET: "wss://s.altnet.rippletest.net:51233",
  XRPL_LABS_TESTNET: "wss://testnet.xrpl-labs.com",
  RIPPLE_AMM_DEVNET: "wss://amm.devnet.rippletest.net:51233/",
}

let xrplClient: Client

// Initialize the client if it doesn't exist or return it.
export const getXrplClient = () => {
  if (!xrplClient) {
    xrplClient = new Client(networks.RIPPLE_TESTNET)
    return xrplClient
  }
  return xrplClient
}
