import color from "colors"
import { EscrowCreate } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

/**
 * Create an escrow and lock XRP in it.
 *
 * @example
 * // To define a finish time with the dayjs library.
 * const finishAfter = dayjs().add(20, "seconds").toISOString()
 */
export const createEscrow = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<EscrowCreate>) => {
  console.log(color.bold("******* LET'S CREATE AN ESCROW *******"))
  console.log()

  // todo: code the function, don't forget to convert the Amount from "txn" with xrpToDrops
}
