// todo: prepare and export the client
import PinataClient from "@pinata/sdk"
import "dotenv/config"
import { Client } from "xrpl"

// https://xrpl.org/public-servers.html
const networks = {
  RIPPLE_TESTNET: "wss://s.altnet.rippletest.net:51233",
  XRPL_LABS_TESTNET: "wss://testnet.xrpl-labs.com",
  RIPPLE_AMM_DEVNET: "wss://amm.devnet.rippletest.net:51233/",
  QUICKNODE: "",
}

let xrplClient: Client

/**
 * Get the XRPL Client to interact with the XRPL Ledger
 * @returns A {@link Client}
 */
export const getXrplClient = () => {
  // todo: write the content of this function after initializing a Client variable above this function (let)
  if (!xrplClient) {
    xrplClient = new Client(networks.RIPPLE_TESTNET)
  }

  return xrplClient
}

let pinataClient: PinataClient

/**
 * Get the Pinata Client
 * @returns A {@link PinataClient}
 */
export const getPinataClient = () => {
  if (!pinataClient) {
    const apiKey = process.env.PINATA_API_KEY
    const secretApiKey = process.env.PINATA_SECRET_API_KEY

    pinataClient = new PinataClient(apiKey, secretApiKey)
  }

  return pinataClient
}
