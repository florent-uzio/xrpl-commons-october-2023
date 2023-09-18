import { xrpToDrops } from "xrpl"
import { getXrplClient } from "./client"
import { sendPayment } from "./transactions"
import { WALLET_1, WALLET_2 } from "./wallets"

const main = async () => {
  const client = getXrplClient()
  await client.connect()

  await sendPayment(
    {
      Amount: xrpToDrops(0.1),
      Destination: WALLET_2.address,
    },
    { wallet: WALLET_1 },
  )

  await client.disconnect()
}

main()
