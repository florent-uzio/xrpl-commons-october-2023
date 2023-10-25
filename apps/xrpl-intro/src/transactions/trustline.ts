import { TrustSet } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForSingleSign } from "../models"

const client = getXrplClient()

/**
 * Define properties of an account.
 */
export const trustSet = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<TrustSet>) => {
  console.log("******* LET'S CREATE AN ACCOUNT SET *******")
  console.log()

  // todo: create the code to send a payment

  const transaction: TrustSet = {
    Account: wallet.address,
    TransactionType: "TrustSet",
    ...txn,
  }

  const response = await client.submitAndWait(transaction, {
    wallet,
    autofill: true,
  })

  if (showLogs) {
    console.log(response)
  }

  return response
}
