import { TrustSet } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForSingleSign } from "../models"

const client = getXrplClient()

export const trustSet = async ({
  txn,
  wallet,
  showLogs,
}: TransactionPropsForSingleSign<TrustSet>) => {
  console.log("LET'S ESTABLISH A TRUSTLINE")

  const transaction: TrustSet = {
    Account: wallet.address,
    TransactionType: "TrustSet",
    ...txn,
  }

  // Autofill transaction with additional fields, sign and submit
  const response = await client.submitAndWait(transaction, { autofill: true, wallet })

  if (showLogs) {
    console.log(response)
  }

  return response
}
