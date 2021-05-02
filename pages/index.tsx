import { Flex, Grid, Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  const fontSize = ["md", "lg", "xl"];
  return (
    <>
      <Head>
        <title>Shahzada Ali Hassan - React Js & GTM Expert</title>
      </Head>
      <Grid placeContent="center" h={"70vh"}>
        <Grid
          templateColumns={["1fr", "200px 2fr", "275px 2fr"]}
          justifyContent="center"
          alignItems="center"
        >
          <Flex alignItems={["center"]} justifyContent="center" m={4}>
            <Image
              height={1000}
              width={1000}
              src="/Images/profileImage001.png"
              alt="Picture of the author"
            />
          </Flex>
          <Flex
            flexDirection={["column"]}
            alignItems={["center", "flex-start"]}
            justifyContent="space-between"
            maxW="container.lg"
            margin="auto"
            pr={2}
            pl={2}
            as="main"
            ml={2}
          >
            <Text
              textAlign={["center", "left"]}
              as="h2"
              pt={[4]}
              fontWeight="bold"
              fontSize={fontSize}
            >
              Shahzada Ali Hassan
            </Text>
            <Heading
              textAlign={["center", "left"]}
              as="h1"
              pt={2}
              fontSize={["3xl", "4xl", "6xl"]}
            >
              Next JS & GTM Expert
            </Heading>
            <Text
              textAlign={["center", "left"]}
              as="p"
              pt={2}
              fontSize={fontSize}
              maxWidth={["lg"]}
            >
              Web Design, Development & Analytics for companies that want to
              grow their business with a great website.
            </Text>
          </Flex>
        </Grid>
      </Grid>
    </>
  );
}
