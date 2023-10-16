import { NFTokenCancelOffer } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

export const cancelOffer = async ({
  txn,
  wallet,
  showLogs,
}: TransactionPropsForSingleSign<NFTokenCancelOffer>) => {
  console.log("******* LET'S CANCEL AN NFT OFFER *******")
  console.log()

  // todo: code the accept NFT offer function
}
