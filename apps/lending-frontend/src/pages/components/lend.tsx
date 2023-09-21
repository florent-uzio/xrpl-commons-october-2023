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

type LendForm = {
  amount: string
  borrower: string // an eth address
}

export const Lend = () => {
  const { register, handleSubmit, watch } = useForm<LendForm>()
  const { lend, currentAccount } = useWeb3()

  const onSubmit: SubmitHandler<LendForm> = async ({ amount, borrower }) => {
    lend(amount, borrower)
  }

  return (
    <Card>
      <CardHeader>
        <Heading size="md">Lend</Heading>
        <Text>Send some deposited money to a another address</Text>
      </CardHeader>
      <CardBody>
        <Image
          borderRadius="2xl"
          maxW="400px"
          src="https://plus.unsplash.com/premium_photo-1681408249339-3ac690151643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          alt="Lend"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl mt="8">
            <FormLabel>Amount</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Text>XRP</Text>
              </InputLeftElement>
              <Input {...register("amount")} type="number" step=".01" />
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
            Send
          </Button>
        </form>
      </CardBody>
    </Card>
  )
}
