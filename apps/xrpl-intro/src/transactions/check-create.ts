import { CheckCreate } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForSingleSign } from "../models"

const client = getXrplClient()

export const createCheck = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<CheckCreate>) => {
  console.log("******* LET'S CREATE A CHECK *******")
  console.log()

  const transaction: CheckCreate = {
    Account: wallet.address,
    TransactionType: "CheckCreate",
    ...txn,
  }

  const response = await client.submitAndWait(transaction, { autofill: true, wallet })

  if (showLogs) {
    console.log(response)
  }

  return response
}
