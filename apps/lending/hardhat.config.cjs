require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()

const PRIVATE_ACCOUNT_KEY = process.env.PRIVATE_KEY ?? ""

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    xrpl: {
      chainId: 1440002,
      url: "https://rpc-evm-sidechain.xrpl.org",
      accounts: [PRIVATE_ACCOUNT_KEY],
    },
  },
}
