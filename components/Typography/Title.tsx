import { Flex, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";

export default function Title({ children, type }) {
  return (
    <>
      <Flex flexDirection="column" mt={[2, 4]} alignItems="left">
        <Heading as={type} fontSize={["md", "lg", "xl"]}>
          {children}
        </Heading>
      </Flex>
    </>
  );
}
