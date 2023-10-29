import { signPaymentChannelClaim } from "xrpl"

/**
 * A simple helper to regularly sign a claim with an increased amount
 *
 * @param channelId
 * @param privateKey
 */
const signClaimWithInterval = (
  channelId: string,
  privateKey: string,
  amount = 1,
  increase = 0.1,
) => {
  setInterval(async () => {
    const res = signPaymentChannelClaim(channelId, amount.toString(), privateKey)

    console.log(`signature ${res} for an amount of ${amount}`)

    amount = +(amount + 0.1).toFixed(2)
  }, 1000)
}
