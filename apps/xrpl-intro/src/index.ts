import "dotenv/config"
import { getXrplClient } from "./client"

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

  // await cancelCheck({
  //   txn: {
  //     CheckID: "E3EA5C75A22A679F55F0EC6244FB645226747C5FFDAC7AB7E199CD08CC366A42",
  //   },
  //   wallet: WALLET_2,
  // })

  // await mintNft({
  //   txn: {
  //     NFTokenTaxon: 0,
  //     URI: convertStringToHex("Some Text"),
  //   },
  //   wallet: WALLET_1,
  // })

  await xrplClient.disconnect()
}

main()
