// todo: create and export the wallets from .env

import "dotenv/config"
import { Wallet } from "xrpl"

// https://xrpl.org/xrp-testnet-faucet.html

const { SEED_1 = "", SEED_2 = "", SEED_3 = "" } = process.env

// Issuer Account
export const WALLET_1 = Wallet.fromSeed(SEED_1)

// Standby Account
export const WALLET_2 = Wallet.fromSeed(SEED_2)
// export const WALLET_3 = Wallet.fromSeed(SEED_3)
