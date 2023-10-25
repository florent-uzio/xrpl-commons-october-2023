import { NFTokenMint, NFTokenMintFlags, convertStringToHex } from "xrpl"
import { getXrplClient } from "../../client"
import { TransactionPropsForSingleSign } from "../../models"

const client = getXrplClient()

export const mintNft = async ({
  wallet,
  txn,
  showLogs = true,
}: TransactionPropsForSingleSign<NFTokenMint>) => {
  console.log("LET'S MINT AN NFT")

  const { Flags, URI, ...rest } = txn

  const transaction: NFTokenMint = {
    Account: wallet.address,
    TransactionType: "NFTokenMint",
    Flags: Flags ?? NFTokenMintFlags.tfTransferable,
    URI: URI ? convertStringToHex(URI) : "",
    ...rest,
  }

  // sign, submit and wait
  const response = await client.submitAndWait(transaction, {
    autofill: true,
    wallet,
  })

  if (showLogs) {
    console.log(response)
  }

  return response
}
