import Head from "next/head";
import { Flex, Heading, Box } from "@chakra-ui/react";
import SocialMediaConnect from "../components/SocialMediaConnect";
import Youtube from "../components/Youtube";

export default function Working() {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID);
  return (
    <>
      <Head>
        <title>HassanAMZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box
        bg="var(--main-bg-color)"
        color="var(--main-text-color)"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <Flex flexDirection="column" h="70vh">
          <SocialMediaConnect />
        </Flex>
        <Box>
          <Youtube />
        </Box>
      </Box>
    </>
  );
}
