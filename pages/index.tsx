import { ProjectRequestButton } from "@/components/Index";
import PortfolioIntroductionSummary from "@/components/Portfolio Components/PortfolioIntroductionSummary";
import { Flex, Grid, Button, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  const fontSize = ["md", "lg", "xl"];
  return (
    <>
      <Head>
        <title>Shahzada Ali Hassan - React Js & GTM Expert</title>
      </Head>
      <PortfolioIntroductionSummary />
    </>
  );
}
