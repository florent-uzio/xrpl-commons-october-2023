import { AccountSet } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForSingleSign } from "../models"

const client = getXrplClient()

/**
 * Define properties of an account.
 */
export const accountSet = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<AccountSet>) => {
  console.log("******* LET'S CREATE AN ACCOUNT SET *******")
  console.log()

  // Step 1 - Create the transaction
  const transaction: AccountSet = {
    Account: wallet.address,
    TransactionType: "AccountSet",
    ...txn,
  }

  // Step 2 - Sign / Submit
  const result = await client.submitAndWait(transaction, {
    autofill: true,
    wallet,
  })

  console.log(result)

  return result
}
