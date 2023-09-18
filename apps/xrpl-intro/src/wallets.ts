import { Wallet } from "xrpl"
import "dotenv/config"

const SEED_1 = process.env.SEED_1 ?? ""
const SEED_2 = process.env.SEED_2 ?? ""
const SEED_3 = process.env.SEED_3 ?? ""

export const WALLET_1 = Wallet.fromSeed(SEED_1)
export const WALLET_2 = Wallet.fromSeed(SEED_2)
export const WALLET_3 = Wallet.fromSeed(SEED_3)
