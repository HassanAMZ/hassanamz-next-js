import { Flex } from "@chakra-ui/react";
import Headline from "../components/Typography/Headline";
import PortfolioIntroductionSummary from "../components/Portfolio Components/PortfolioIntroductionSummary";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home || Hassan AMZ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Flex flexDirection="column">
        <Headline type="h2">Hey, I'm Shahzada Ali Hassan</Headline>
        <PortfolioIntroductionSummary />
      </Flex>
    </>
  );
}
