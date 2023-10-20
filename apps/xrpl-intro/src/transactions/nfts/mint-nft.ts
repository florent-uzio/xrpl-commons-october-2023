import { NFTokenMint } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

export const mintNft = async ({
  wallet,
  txn,
  showLogs,
}: TransactionPropsForSingleSign<NFTokenMint>) => {
  console.log("LET'S MINT AN NFT")

  // todo: code the mint nft function
}
