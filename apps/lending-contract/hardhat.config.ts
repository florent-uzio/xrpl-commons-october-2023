import "@nomicfoundation/hardhat-toolbox"
import "@typechain/hardhat"
import "dotenv/config"
import { HardhatUserConfig } from "hardhat/config"

const PRIVATE_ACCOUNT_KEY = process.env.PRIVATE_KEY ?? ""

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    xrpl: {
      chainId: 1440002,
      url: "https://rpc-evm-sidechain.xrpl.org",
      accounts: [PRIVATE_ACCOUNT_KEY],
    },
  },
}

export default config
