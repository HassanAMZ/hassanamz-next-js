import { Center, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";

export default function Title({ text, headingType }) {
  return (
    <>
      <Heading as={headingType} fontSize={["md", "lg", "xl"]}>
        {text}
      </Heading>
      <Text as="p" fontSize={["md", "lg", "xl"]}>
        ___
      </Text>
    </>
  );
}
