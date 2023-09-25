# Lending smart contract

This repo runs using Vite.

Install the dependencies.

At the root directory of this monorepo, run `npm install`.

Then cd into this repo `cd apps/lending-contract`.

## Compile

To compile the contract, run `npm run compile`. This will create the `typechain-types` directory useful for typescript development.

## Deploy your contract

Steps to deploy your contract to the EVM sidechain devnet.

Copy `.env.example` to `.env` and write your metamask account private key.

To get your private key follow [this tutorial](https://support.metamask.io/hc/en-us/articles/360015289632-How-to-export-an-account-s-private-key).

Then run `npm run deploy` in this project (`lending-contract`).

The `deploy` command will deploy your contract to the EVM Sidechain and will create a new "contracts" directory in `lending-frontend/src`.
