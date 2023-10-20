import { Payment } from "xrpl"
import { TransactionPropsForMultiSign, TransactionPropsForSingleSign } from "../models"

type SendPaymentProps = TransactionPropsForMultiSign | TransactionPropsForSingleSign<Payment>

export const sendPayment = async (props: SendPaymentProps) => {
  // todo: create the code to send a payment
}
