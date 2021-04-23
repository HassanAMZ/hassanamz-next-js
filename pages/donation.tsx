import {
  FormControl,
  FormLabel,
  Button,
  Input,
  HStack,
  FormHelperText,
  FormErrorMessage,
  RadioGroup,
  Radio,
  Select,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberInputStepper,
  NumberIncrementStepper,
  Container,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import Layout from "../components/Layout/Layout";
import Head from "next/head";
export default function Donation() {
  return (
    <>
      <Head>
        <title>Donation || HassanAMZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          <Formik
            initialValues={{ name: "John Doe" }}
            onSubmit={(values, actions) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
              }, 1000);
            }}
          >
            <Form>
              <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>

              <FormControl as="fieldset" isRequired>
                <FormLabel as="legend">I'm donating for:</FormLabel>
                <RadioGroup defaultValue="Ramadan">
                  <HStack spacing="24px">
                    <Radio value="Education">Education</Radio>
                    <Radio value="Food">Food</Radio>
                    <Radio value="Ramadan">Ramadan</Radio>
                    <Radio value="Homeless">Homeless</Radio>
                  </HStack>
                </RadioGroup>
                <FormHelperText>
                  Select where you would like the donation to be used
                </FormHelperText>
              </FormControl>
              <FormControl id="donation" isRequired>
                <FormLabel>Donation Amount</FormLabel>
                <NumberInput max={500} min={1}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <Button
                mt={4}
                colorScheme="teal"
                loadingText="Submitting"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Formik>
        </Container>
      </Layout>
    </>
  );
}
