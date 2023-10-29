import { PaymentChannelClaim } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

export const claimPaymentChannel = async ({
  txn,
  wallet,
  showLogs,
}: TransactionPropsForSingleSign<PaymentChannelClaim>) => {
  console.log("LET'S CLAIM A PAYMENT CHANNEL")

  // todo: create the code
}
