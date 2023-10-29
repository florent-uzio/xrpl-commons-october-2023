import { CheckCancel } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForSingleSign } from "../models"

const client = getXrplClient()

export const cancelCheck = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<CheckCancel>) => {
  console.log("******* LET'S CANCEL A CHECK *******")
  console.log()

  const transaction: CheckCancel = {
    Account: wallet.address,
    TransactionType: "CheckCancel",
    ...txn,
  }

  const response = await client.submitAndWait(transaction, { autofill: true, wallet })

  if (showLogs) {
    console.log(response)
  }

  return response
}
