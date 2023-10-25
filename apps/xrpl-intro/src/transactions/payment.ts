import { Payment } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"

type SendPaymentProps = TransactionPropsForMultiSign | TransactionPropsForSingleSign<Payment>

const client = getXrplClient()

export const sendPayment = async (props: SendPaymentProps) => {
  // todo: create the code to send a payment
  console.log("LET'S CREATE A PAYMENT")

  if (props.isMultisign) {
    console.log("WE WILL DO IT LATER")
  } else {
    // Single sign transaction

    const { txn, showLogs, wallet } = props

    const transaction: Payment = {
      Account: wallet.address,
      TransactionType: "Payment",
      ...txn,
    }

    // console.log(transaction)

    // const preparedTxn = await client.autofill(transaction)
    //
    // Sign the transaction with your private key
    // const signed = wallet.sign(preparedTxn)
    // console.log(signed)

    // Submit to the ledger

    const finalResponse = await client.submitAndWait(transaction, {
      autofill: true,
      wallet,
    })
    console.log(finalResponse)
  }
}
