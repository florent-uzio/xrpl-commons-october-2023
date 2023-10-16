import { NFTokenAcceptOffer } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

export const acceptOffer = async ({
  txn,
  wallet,
  showLogs = true,
}: TransactionPropsForSingleSign<NFTokenAcceptOffer>) => {
  console.log("******* LET'S ACCEPT AN NFT OFFER *******")
  console.log()

  // todo: code the accept NFT offer function
}
