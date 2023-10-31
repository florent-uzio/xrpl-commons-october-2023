import color from "colors"
import { EscrowFinish } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

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

  // todo: code the function
  const transaction: EscrowFinish = {
    Account: wallet.address,
    TransactionType: "EscrowFinish",
    ...txn,
  }

  const result = await client.submitAndWait(transaction, {
    autofill: true,
    wallet,
  })

  console.log(result)

  return result
}
