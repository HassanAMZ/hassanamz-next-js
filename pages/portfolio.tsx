import { Heading, Box } from "@chakra-ui/react";
import {
  PortfolioIntroductionDetailed,
  PortfolioIntroductionSummary,
} from "../components/Portfolio Components/Index";
import Head from "next/head";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio - Shahzada Ali Hassan</title>
      </Head>
      <Heading type="h3">About</Heading>
      <PortfolioIntroductionSummary />
      <PortfolioIntroductionDetailed />{" "}
    </>
  );
};
export default Portfolio;
