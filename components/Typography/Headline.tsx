import { Flex, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";

export default function Headline({ children, type }) {
  return (
    <>
      <Flex flexDirection="column" mt={[2, 4]} mb={[2, 4]} alignItems="left">
        <Heading as={type}>{children}</Heading>
      </Flex>
    </>
  );
}
