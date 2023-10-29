// todo: create and export the wallets from .env

import "dotenv/config"
import { Wallet } from "xrpl"

// https://xrpl.org/xrp-testnet-faucet.html

const { SEED_1 = "", SEED_2 = "" } = process.env

export const WALLET_1 = Wallet.fromSeed(SEED_1)
export const WALLET_2 = Wallet.fromSeed(SEED_2)
