import { Buffer } from "buffer"

// https://xrpl.org/currency-formats.html#nonstandard-currency-codes
const NON_STANDARD_CODE_LENGTH = 40
const validHexRegex = /^[0-9A-Fa-f]+$/g

/**
 * Convert an hexadecimal value to readable string.
 *
 * @param hex The hexadecimal to convert.
 * @returns A human readable string.
 */
export const hexToString = (hex: string) => {
  let string = ""
  if (!hex.match(validHexRegex)) return ""

  for (let i = 0; i < hex.length; i += 2) {
    const part = hex.substring(i, i + 2)
    const code = parseInt(part, 16)
    if (!isNaN(code) && code !== 0) {
      string += String.fromCharCode(code)
    }
  }
  return string
}

/**
 * Converts a human readable currency code to hexadecimal.
 * If the currency has 3 characters (XRP, EUR, USD...) then return immediately this currency code.
 * If the currency has more than 3 characters, then encode it to the XRP ledger format.
 * Example: USDM will become 5553444D00000000000000000000000000000000
 *
 * @param currencyCode The currency code to potentially encode to the XRP ledger format.
 * @returns A {@link string}
 */
export const convertCurrencyCodeToHex = (currencyCode: string) => {
  if (currencyCode.length > 3) {
    return Buffer.from(currencyCode, "ascii")
      .toString("hex")
      .toUpperCase()
      .padEnd(NON_STANDARD_CODE_LENGTH, "0")
  }
  return currencyCode
}

/**
 * Helper to correctly display the currency code if its length is more than 3.
 * Example: 5553444D00000000000000000000000000000000 will become USDM
 *
 * @param currencyCode The currency code to potentially format correctly.
 * @returns A {@link String} representing the currency code readable by a human.
 */
export const convertHexCurrencyCodeToString = (currencyCode: string) => {
  if (currencyCode.length === NON_STANDARD_CODE_LENGTH) {
    return hexToString(currencyCode)
  }
  return currencyCode
}
