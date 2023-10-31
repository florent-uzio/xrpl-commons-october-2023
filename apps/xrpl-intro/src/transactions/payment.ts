import { Payment } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"

type SendPaymentProps = TransactionPropsForMultiSign | TransactionPropsForSingleSign<Payment>

const client = getXrplClient()

export const sendPayment = async (props: SendPaymentProps) => {
  // todo: create the code to send a payment

  if (props.isMultisign) {
    console.log("LATER")
  } else {
    // Single sign

    const { txn, showLogs = true, wallet } = props

    // Step 1 - Create Payment Object
    const transaction: Payment = {
      Account: wallet.address,
      TransactionType: "Payment",
      ...txn,
    }

    const response = await client.submitAndWait(transaction, {
      autofill: true,
      wallet,
    })

    if (showLogs) {
      console.log(response)
    }

    return response
  }
}
