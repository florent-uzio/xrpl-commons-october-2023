import color from "colors"
import { EscrowCancel } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForSingleSign } from "../models"

const client = getXrplClient()

export const cancelEscrow = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<EscrowCancel>) => {
  console.log(color.bold("******* LET'S CANCEL AN ESCROW *******"))
  console.log()

  // Construct the base transaction
  const transaction: EscrowCancel = {
    TransactionType: "EscrowCancel",
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
