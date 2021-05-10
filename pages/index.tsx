import { ProjectRequestButton, SkillsGrid } from "@/components/Index";
import PortfolioIntroductionSummary from "@/components/Portfolio Components/PortfolioIntroductionSummary";
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
      <Box maxW="container.lg" margin="auto" p={4} mt={"50px"}>
        <PortfolioIntroductionSummary />
      </Box>
      <Box bg="gray">
        <Box maxW="container.lg" margin="auto" p={4}>
          <SkillsGrid />
        </Box>
      </Box>
    </>
  );
}
