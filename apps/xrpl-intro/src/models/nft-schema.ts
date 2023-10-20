export type Attributes = {
  trait_type: string
  value: string
  someOtherInfo?: string
}

/**
 * Support for xls-24d
 * https://github.com/XRPLF/XRPL-Standards/discussions/69
 */
export type NFTSchema = {
  additional?: string
  animation?: string
  attributes?: Attributes[]
  audio?: string
  collection?: {
    name: string
    family?: string
  }
  description: string
  file?: string
  image: string
  issuer?: string
  name: string
  network?: string
  nftType: string
  schema: "ipfs://Qmd7WUJLZxJmX37a4V5nTXoa9YvU5Uw3eZW5aCTPr3wYEo"
  video?: string
}
