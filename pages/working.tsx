import Head from "next/head";
import Title from "../components/Typography/Title";
import { Flex, Box } from "@chakra-ui/react";
import SocialMediaConnect from "../components/SocialMediaConnect";
import { AnimePoster, Headline } from "../components/Index";
import Youtube from "../components/Youtube";
export default function Working() {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID);
  return (
    <>
      <Head>
        <title>Under Construction || HassanAMZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Headline type="h2">Title heading</Headline>
        <Box alignItems="center" justifyContent="center" h="80vh">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <SocialMediaConnect />
          </Flex>
          <Box>
            <Youtube />
          </Box>
        </Box>
        <AnimePoster />
      </>
    </>
  );
}
