import color from "colors"
import { EscrowCancel } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

export const cancelEscrow = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<EscrowCancel>) => {
  console.log(color.bold("******* LET'S CANCEL AN ESCROW *******"))
  console.log()

  // todo: code the function
}
