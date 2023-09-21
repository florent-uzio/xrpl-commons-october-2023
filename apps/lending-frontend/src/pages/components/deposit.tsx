import {
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

export const Deposit = () => {
  return (
    <Card>
      <CardHeader>
        <Heading size="md">Deposit</Heading>
      </CardHeader>
      <CardBody>
        <Image
          borderRadius="2xl"
          maxW="400px"
          src="https://images.unsplash.com/photo-1607863680151-1da3e60691bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
          alt="Deposit"
        />

        <FormControl mt="8">
          <FormLabel>Amount</FormLabel>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Text>XRP</Text>
            </InputLeftElement>
            <Input type="number" />
          </InputGroup>
        </FormControl>
      </CardBody>
    </Card>
  )
}
