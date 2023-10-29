import "dotenv/config"
import { getXrplClient } from "./client"
import { cancelCheck } from "./transactions"
import { WALLET_2 } from "./wallets"

// const pinataClient = getPinataClient()
const xrplClient = getXrplClient()

// const { PINATA_GATEWAY } = process.env

const main = async () => {
  await xrplClient.connect()

  // await createCheck({
  //   txn: {
  //     Destination: WALLET_2.address,
  //     SendMax: "90",
  //   },
  //   wallet: WALLET_1,
  // })

  // const res = await xrplClient.request({
  //   command: "account_objects",
  //   account: WALLET_1.address,
  // })

  // console.log(JSON.stringify(res, null, 2))

  await cancelCheck({
    txn: {
      CheckID: "E3EA5C75A22A679F55F0EC6244FB645226747C5FFDAC7AB7E199CD08CC366A42",
    },
    wallet: WALLET_2,
  })

  // await mintNft({
  //   txn: {
  //     NFTokenTaxon: 0,
  //     URI: convertStringToHex("Some Text"),
  //   },
  //   wallet: WALLET_1,
  // })

  await xrplClient.disconnect()
}

// const getPageNumbers = async () => {
//   await xrplClient.connect()

//   let res = await xrplClient.request({
//     command: "account_objects",
//     account: "rQLpRRwknu51LornBtpZLWGoK8UCEMFX3v",
//     type: "nft_page",
//   })

//   let count = res.result.account_objects.length

//   while (res.result.marker) {
//     res = await xrplClient.request({
//       command: "account_objects",
//       account: "rQLpRRwknu51LornBtpZLWGoK8UCEMFX3v",
//       type: "nft_page",
//       marker: res.result.marker,
//     })

//     count += res.result.account_objects.length
//   }

//   console.log(count)

//   await xrplClient.disconnect()
// }

// const edge = async () => {
//   await xrplClient.connect()
//   const tx = await xrplClient.request({
//     command: "tx",
//     transaction: "8821A8EF3E1BC04B59FC2C4056EDC6C8440BF6E40B231D810936C159953A44E4",
//   })

//   if (tx.result.meta && typeof tx.result.meta === "object") {
//     const res = getBalanceChanges(tx.result.meta)
//     console.log(JSON.stringify(res, null, 2))
//   }

//   await xrplClient.disconnect()
// }

main()
