import "dotenv/config"
import { getXrplClient } from "./client"

// const pinataClient = getPinataClient()
const xrplClient = getXrplClient()

// const { PINATA_GATEWAY } = process.env

const main = async () => {
  await xrplClient.connect()

  // await sendPayment({
  //   txn: {
  //     Amount: {
  //       issuer: "rUqa4q3oeNKjdzifaxKNwy4pth7L3pgeCV",
  //       currency: convertCurrencyCodeToHex("EPITA"),
  //       value: "1000",
  //     },
  //     Destination: WALLET_2.address,
  //     // Flags: PaymentFlags.tfPartialPayment,
  //   },
  //   wallet: WALLET_1,
  // })

  // await mintNft({
  //   txn: {
  //     URI: "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif",
  //     NFTokenTaxon: 0,
  //   },
  //   wallet: WALLET_1,
  // })

  // await createOffer({
  //   txn: {
  //     Flags: NFTokenCreateOfferFlags.tfSellNFToken,
  //     NFTokenID: "00080000BA618492D1BD6D0EF89D6701BCCFD48EE85C096D16E5DA9C00000001",
  //     Amount: xrpToDrops(100),
  //   },
  //   wallet: WALLET_1,
  // })

  // await acceptOffer({
  //   txn: {
  //     NFTokenSellOffer: "D43DD066DBDA7A3DD24DE6D4E23BAEDE4719CD9EE39D1AEEE7547DC6A8C379FC",
  //   },
  //   wallet: WALLET_2,
  // })

  // const finishAfter = dayjs().add(1, "hour").toISOString()
  // const cancelAfter = dayjs().add(1, "hour").toISOString()

  // const { condition } = generateConditionAndFulfillment()

  // await createEscrow({
  //   txn: {
  //     Destination: WALLET_2.address,
  //     // FinishAfter: isoTimeToRippleTime(finishAfter),
  //     Amount: xrpToDrops(11),
  //     Condition: condition,
  //     CancelAfter: isoTimeToRippleTime(cancelAfter),
  //   },
  //   wallet: WALLET_1,
  // })

  // await finishEscrow({
  //   txn: {
  //     OfferSequence: 42475082,
  //     Owner: WALLET_1.address,
  //     Condition: "A025802011D2401A47ED5ECB5019D5717E3C132A29A52B753E0B3B2EB6ACA04C9C39BE35810120",
  //     Fulfillment: "A0228020BC8D6157B581EE6C6EED128EE1154B718F71445AE39447CDF882683405683FFA",
  //   },
  //   wallet: WALLET_2, // Pour vous WALLET_1
  // })

  // await accountSet({
  //   txn: {
  //     SetFlag: AccountSetAsfFlags.asfDisallowXRP,
  //     Domain: convertStringToHex("https://florent-user.com"),
  //   },
  //   wallet: WALLET_2,
  // })

  // const signer1: SignerEntry = {
  //   SignerEntry: {
  //     Account: "rHbU7Lsk9Ko3knnCJhnJKLNgwer3LGiMjd",
  //     SignerWeight: 1,
  //   },
  // }
  // const signer2: SignerEntry = {
  //   SignerEntry: {
  //     Account: "r4EWYU35xFTCTsZLb3emMf2NQqcbDzeaKh",
  //     SignerWeight: 1,
  //   },
  // }
  // const signer3: SignerEntry = {
  //   SignerEntry: {
  //     Account: "rPi72edfgXoSXCM1DQ4ucVi3Q5DVXtNFuE",
  //     SignerWeight: 1,
  //   },
  // }

  // await setSignerList({
  //   txn: {
  //     SignerEntries: [signer1, signer2, signer3],
  //     SignerQuorum: 2,
  //   },
  //   wallet: WALLET_1,
  // })

  // await trustSet({
  //   txn: {
  //     Flags: TrustSetFlags.tfSetNoRipple,
  //     LimitAmount: {
  //       issuer: "rUqa4q3oeNKjdzifaxKNwy4pth7L3pgeCV",
  //       currency: convertCurrencyCodeToHex("EPITA"),
  //       value: "10000000",
  //     },
  //   },
  //   wallet: WALLET_2,
  // })

  await xrplClient.disconnect()
}

main()
