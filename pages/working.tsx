import Head from "next/head";
import { Flex, Box } from "@chakra-ui/react";
import SocialMediaConnect from "../components/SocialMediaConnect";
import Youtube from "../components/Youtube";
import AnimePoster from "../components/Anime Posters/AnimePoster";
import Layout from "../components/Layout/Layout";

export default function Working() {
  console.log(process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID);
  return (
    <>
      <Head>
        <title>Under Construction || HassanAMZ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box alignItems="center" justifyContent="center">
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
          <AnimePoster />
        </Box>
      </Layout>
    </>
  );
}
