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

  // todo: code the function
}
