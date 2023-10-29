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

  // todo: create the code
}
