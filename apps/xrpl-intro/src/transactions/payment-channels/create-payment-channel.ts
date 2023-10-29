import { PaymentChannelCreate } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

export const createPaymentChannel = async ({
  txn,
  wallet,
  showLogs,
}: TransactionPropsForSingleSign<PaymentChannelCreate>) => {
  console.log("LET'S CREATE A PAYMENT CHANNEL")

  // todo: create the code
}
