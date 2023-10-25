// organize-imports-ignore
import dayjs from "dayjs"
import "dotenv/config"
import {
  AccountSetAsfFlags,
  SignerEntry,
  TrustSetFlags,
  Wallet,
  convertStringToHex,
  isoTimeToRippleTime,
  xrpToDrops,
} from "xrpl"
import { getXrplClient } from "./client"
import { accountSet, createEscrow, finishEscrow, sendPayment } from "./transactions"
import { WALLET_1, WALLET_2 } from "./wallets"
import { generateConditionAndFulfillment } from "./helpers"
import { setSignerList } from "./transactions/set-signer-list"
import { trustSet } from "./transactions/trustline"

// const pinataClient = getPinataClient()
const xrplClient = getXrplClient()

// const { PINATA_GATEWAY } = process.env

const main = async () => {
  await xrplClient.connect()

  // await sendPayment({
  //   txn: {
  //     Destination: WALLET_2.address,
  //     Amount: {
  //       value: "10000",
  //       issuer: "r12313",
  //       currency: "EUR",
  //     },
  //   },
  //   wallet: WALLET_1,
  // })

  // await accountSet({
  //   txn: {
  //     Domain: convertStringToHex("https://commons-issuer.com"),
  //     SetFlag: AccountSetAsfFlags.asfDefaultRipple,
  //   },
  //   wallet: WALLET_1,
  // })

  // const signer1: SignerEntry = {
  //   SignerEntry: {
  //     SignerWeight: 1,
  //     Account: "rfCG36CzYEfNyE1pcJ9Wwign4TXv853qEx",
  //   },
  // }

  // const signer2: SignerEntry = {
  //   SignerEntry: {
  //     SignerWeight: 1,
  //     Account: "rHPLJ8TZvVsBrhDrQS9Hx9PrbUkrvMYKab",
  //   },
  // }
  // const signer3: SignerEntry = {
  //   SignerEntry: {
  //     SignerWeight: 1,
  //     Account: "r97jzmHQ4sxeDCexWEcE9mY5agHf2Yt1As",
  //   },
  // }

  // await setSignerList({
  //   txn: {
  //     SignerQuorum: 2,
  //     SignerEntries: [signer1, signer2, signer3],
  //   },
  //   wallet: WALLET_1,
  // })

  // await accountSet({
  //   txn: {
  //     SetFlag: AccountSetAsfFlags.asfDisableMaster,
  //   },
  //   wallet: WALLET_1,
  // })

  // await accountSet({
  //   txn: {
  //     Domain: convertStringToHex("https://standby.com"),
  //     SetFlag: AccountSetAsfFlags.asfDisallowXRP,
  //   },
  //   wallet: WALLET_2,
  // })

  // await trustSet({
  //   txn: {
  //     Flags: TrustSetFlags.tfSetNoRipple,
  //     LimitAmount: {
  //       currency: "ABC",
  //       value: "1000000",
  //       issuer: WALLET_1.address,
  //     },
  //   },
  //   wallet: WALLET_2,
  // })

  const res = await xrplClient.request({
    command: "account_lines",
    account: WALLET_1.address,
  })

  console.log(res)

  await xrplClient.disconnect()
}

main()
