import { SignerListSet } from "xrpl"
import { getXrplClient } from "../client"
import { TransactionPropsForSingleSign } from "../models"

const client = getXrplClient()

export const setSignerList = async ({
  txn,
  wallet,
  showLogs,
}: TransactionPropsForSingleSign<SignerListSet>) => {
  console.log("LET'S SET SOME SIGNERS")

  // Step 1
  const transaction: SignerListSet = {
    Account: wallet.address,
    TransactionType: "SignerListSet",
    ...txn,
  }

  // Step 2
  const result = await client.submitAndWait(transaction, {
    autofill: true,
    wallet,
  })

  console.log(result)

  return result
}
