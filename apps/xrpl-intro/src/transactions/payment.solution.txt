import { Payment, xrpToDrops } from "xrpl"
import { getXrplClient } from "../client"
import { convertCurrencyCodeToHex } from "../helpers"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"

type SendPaymentProps = TransactionPropsForMultiSign | TransactionPropsForSingleSign<Payment>

const client = getXrplClient()

export const sendPayment = async (props: SendPaymentProps) => {
  console.log("******* LET'S SEND A PAYMENT *******")
  console.log()

  if (props.isMultisign) {
    // Handle the multi-sign scenario
  } else {
    let { Amount, ...rest } = props.txn
    const { wallet, showLogs = true } = props

    // Convert the amount to drops (1 drop = .000001 XRP)
    if (typeof Amount === "string") {
      Amount = xrpToDrops(Amount)
    } else {
      Amount.currency = convertCurrencyCodeToHex(Amount.currency)
    }

    // Construct the base transaction
    const transaction: Payment = {
      Account: wallet.address,
      Amount,
      TransactionType: "Payment",
      ...rest,
    }

    // Autofill transaction with additional fields, sign and submit
    const response = await client.submitAndWait(transaction, { autofill: true, wallet })

    if (showLogs) {
      console.log(response)
    }

    return response
  }
}
