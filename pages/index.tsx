import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  const fontSize = ["md", "lg", "xl"];
  return (
    <>
      <Head>
        <title>Shahzada Ali Hassan - React Js & GTM Expert</title>
      </Head>

      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        maxW="container.lg"
        margin="auto"
        pb={[4]}
        pt={[4]}
        pr={2}
        pl={2}
        as="main"
      >
        <Box
          maxW={["30vh", "30vh", "25vh"]}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
    
        >
          <Image
            height={681}
            width={366}
            src="/Images/profileImage001.png"
            alt="Picture of the author"
          />
        </Box>
        <Text textAlign="center" as="h2" fontWeight="bold" fontSize={fontSize}>
          Shahzada Ali Hassan
        </Text>
        <Heading
          textAlign="center"
          as="h1"
          mt={1}
          mb={2}
          fontSize={["2xl", "4xl", "6xl"]}
        >
          Next JS & GTM Expert
        </Heading>
        <Text textAlign="center" as="p" fontSize={fontSize} maxWidth={["lg"]}>
          Web Design, Development & Analytics for companies that want to grow
          their business with a great website.
        </Text>
      </Flex>
    </>
  );
}
