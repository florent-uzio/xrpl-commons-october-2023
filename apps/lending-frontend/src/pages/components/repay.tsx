import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useWeb3 } from "../../shared/contexts"

type RepayForm = {
  amount: string
  borrower: string // an eth address
}

export const Repay = () => {
  const { register, handleSubmit, watch } = useForm<RepayForm>()
  const { currentAccount } = useWeb3()

  const onSubmit: SubmitHandler<RepayForm> = async ({ amount, borrower }) => {
    // lend(amount, borrower)
    console.log(amount, borrower)
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Repay</Heading>
        <Text>Repay the borrowed money and the interest</Text>
      </CardHeader>
      <CardBody>
        <Image
          borderRadius="2xl"
          maxW="400px"
          src="https://images.mktw.net/im-507790?width=700&height=467"
          alt="Lend"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mt="8">
            <FormLabel>Amount</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Text>XRP</Text>
              </InputLeftElement>
              <Input {...register("amount")} type="number" step=".00001" />
            </InputGroup>
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Borrower</FormLabel>
            <Input {...register("borrower")} type="text" />
          </FormControl>
          <Button
            isDisabled={currentAccount === "" || watch("amount") === "" || watch("borrower") === ""}
            mt="4"
            size="sm"
            type="submit"
          >
            Repay
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}
