import { Payment } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"

type SendPaymentProps = TransactionPropsForMultiSign | TransactionPropsForSingleSign<Payment>

const client = getXrplClient()

export const sendPayment = async (props: SendPaymentProps) => {
  // todo: create the code to send a payment

  if (props.isMultisign) {
    console.log("On le fera plus tard")
  } else {
    // Single sign

    const { txn, wallet, showLogs } = props

    // 1ere Etape - Creer l'objet Payment
    const payment: Payment = {
      Account: wallet.address,
      TransactionType: "Payment",
      ...txn,
      // LastLedgerSequence
    }

    console.log(payment)

    const preparedTxn = await client.autofill(payment)
    console.log(payment)

    // 2e etape - Signer
    const signed = wallet.sign(preparedTxn)

    // 3e etape - envoyer vers XRPL
    const response = await client.submitAndWait(signed.tx_blob)

    console.log(response)

    return response
  }
}
