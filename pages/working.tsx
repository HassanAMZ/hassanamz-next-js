import Head from "next/head";
import Title from "../components/Layout/Title";
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
        <Title text="This is the main Title" headingType="h2" />
        <Box alignItems="center" justifyContent="center" h="80vh">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <SocialMediaConnect />
          </Flex>
          <Box>{/* <Youtube /> */}</Box>
        </Box>
        <AnimePoster />
      </Layout>
    </>
  );
}
