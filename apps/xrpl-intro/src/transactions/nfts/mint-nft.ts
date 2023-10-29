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

  const transaction: NFTokenMint = {
    Account: wallet.address,
    TransactionType: "NFTokenMint",
    ...txn,
  }

  const response = await client.submitAndWait(transaction, { autofill: true, wallet })

  console.log(response)
  // todo: code the mint nft function
}
