import { signPaymentChannelClaim } from "xrpl"

/**
 * A simple helper to regularly sign a claim with an amount increasing every second.
 *
 * @param channelId
 * @param privateKey
 */
export const signClaimWithInterval = (
  channelId: string,
  privateKey: string,
  amount = 1,
  increase = 0.1,
) => {
  setInterval(async () => {
    const res = signPaymentChannelClaim(channelId, amount.toString(), privateKey)

    console.log(`signature ${res} for an amount of ${amount}`)

    amount = +(amount + increase).toFixed(2)
  }, 1000)
}
