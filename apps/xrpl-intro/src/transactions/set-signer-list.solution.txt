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

  const transaction: SignerListSet = {
    Account: wallet.address,
    TransactionType: "SignerListSet",
    ...txn,
  }

  // Autofill transaction with additional fields, sign and submit
  const response = await client.submitAndWait(transaction, { autofill: true, wallet })

  if (showLogs) {
    console.log(response)
  }

  return response
}
