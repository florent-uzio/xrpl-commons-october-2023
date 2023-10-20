import { Payment } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForSingleSign } from "../models"

const client = getXrplClient()

type SendBulkPayments = TransactionPropsForSingleSign<Payment> & {
  destinations: string[]
}

export const sendBulkPayments = async ({
  txn,
  destinations,
  wallet,
  showLogs,
}: SendBulkPayments) => {
  console.log("LET'S SEND BULK PAYMENTS")

  for (const destination of destinations) {
    console.log("***************")

    const transaction: Payment = {
      TransactionType: "Payment",
      Account: wallet.address,
      ...txn,
      Destination: destination,
    }

    const response = await client.submitAndWait(transaction, { wallet, autofill: true })

    if (showLogs) {
      console.log(response)
    }
  }
}
