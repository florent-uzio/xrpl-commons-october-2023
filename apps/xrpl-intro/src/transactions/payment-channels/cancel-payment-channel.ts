import { PaymentChannelClaim } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

export const cancelPaymentChannel = async ({
  txn,
  wallet,
  showLogs,
}: TransactionPropsForSingleSign<PaymentChannelClaim>) => {
  console.log("LET'S CANCEL A PAYMENT CHANNEL")

  // todo: create the code
}
