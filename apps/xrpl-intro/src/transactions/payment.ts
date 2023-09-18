import { Payment } from "xrpl"
import { getXrplClient } from "../client"
import { TxnOptions } from "../models"

type SendPaymentProps = Omit<Payment, "TransactionType" | "Account">

const client = getXrplClient()

export const sendPayment = async (
  props: SendPaymentProps,
  { wallet, showLogs = true }: TxnOptions,
) => {
  // prepare the payment JSON
  const payment: Payment = {
    TransactionType: "Payment",
    Account: wallet.address,
    ...props,
  }

  // sign and submit
  const response = await client.submitAndWait(payment, {
    autofill: true,
    wallet,
  })

  showLogs && console.log(JSON.stringify(response, null, 2))

  return response
}
