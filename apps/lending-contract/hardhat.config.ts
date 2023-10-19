import "@nomicfoundation/hardhat-toolbox"
import "@typechain/hardhat"
import "dotenv/config"
import { HardhatUserConfig } from "hardhat/config"

const PRIVATE_ACCOUNT_KEY = process.env.PRIVATE_KEY ?? ""

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {},
}

export default config
