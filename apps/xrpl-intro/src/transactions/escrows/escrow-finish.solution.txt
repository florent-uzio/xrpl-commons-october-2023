import color from "colors"
import { EscrowFinish } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForSingleSign } from "../models"

const client = getXrplClient()

/**
 * Collect the funds in an escrow
 */
export const finishEscrow = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<EscrowFinish>) => {
  console.log(color.bold("******* LET'S FINISH AN ESCROW *******"))
  console.log()

  // Construct the base transaction
  const transaction: EscrowFinish = {
    TransactionType: "EscrowFinish",
    Account: wallet.address,
    ...txn,
  }

  // Autofill transaction with additional fields, sign and submit
  const response = await client.submitAndWait(transaction, { autofill: true, wallet })

  if (showLogs) {
    console.log(response)
  }

  return response
}
