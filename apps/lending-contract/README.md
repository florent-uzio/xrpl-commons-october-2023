# Lending smart contract

This is a repo to showcase the interaction with the EVM Sidechain using Hardhat.

## Install the dependencies.

At the root directory of this monorepo, run `npm install`. If you have done that previously, skip this section and go to `TODOs`.

Then cd into this repo `cd apps/lending-contract`.

## TODOs

Do the following to have this exercise completed:

1. Copy `.env.example` to `.env` and write your metamask account private key.
   To get your private key follow [this tutorial](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key).

2. Update hardhat.config.ts, specifically `networks: {}`. The custom network must be called `xrpl`. In this custom network, you need to write three things:
   a. chainId (1440002)
   b. url (https://rpc-evm-sidechain.xrpl.org)
   c. accounts (this private key signing the deployment of the contract). The private key is in the .env file from step 1. You need to extract it from process.env.

The solution hardhat.config.ts is in `hardhat.config.solution.txt`.

## Compile (optional)

To compile the contract, run `npm run compile`. This will create the `typechain-types` directory useful for typescript development. This is automatically done when you deploy the contract.

## Deploy your contract

Run `npm run deploy`.

The `deploy` command will deploy your contract to the EVM Sidechain and will create a new "contracts" directory in `lending-frontend/src`.

It will console.log the address of the deployed contract that you can see at: `https://evm-sidechain.xrpl.org/address/{CONTRACT_ADDRESS}`
