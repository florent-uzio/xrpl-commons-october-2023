import color from "colors"
import crypto from "crypto"
// @ts-expect-error no types available
import cc from "five-bells-condition"

export const generateConditionAndFulfillment = () => {
  console.log(color.bold("******* LET'S GENERATE A CRYPTO CONDITOON AND FULFILLMENT *******"))
  console.log()

  // use cryptographically secure random bytes generation
  const preimage = crypto.randomBytes(32)

  const fulfillment = new cc.PreimageSha256()
  fulfillment.setPreimage(preimage)

  const condition = fulfillment.getConditionBinary().toString("hex").toUpperCase()
  console.log("Condition:", condition)

  // Keep secret until you want to finish the escrow
  const fulfillment_hex = fulfillment.serializeBinary().toString("hex").toUpperCase()
  console.log("Fulfillment (keep secret until you want to finish the escrow):", fulfillment_hex)

  console.log()

  return {
    condition,
    fulfillment,
  }
}
