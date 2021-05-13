import { ProjectRequestButton, SkillsGrid } from "@/components/Index";
import PortfolioIntroductionSummary from "@/components/Portfolio Components/PortfolioIntroductionSummary";
import { Flex, Container, Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  const fontSize = ["md", "lg", "xl"];
  return (
    <>
      <Head>
        <title>Shahzada Ali Hassan - React Js & GTM Expert</title>
      </Head>
      <Container maxW="container.lg" p={4} mt={"50px"}>
        <PortfolioIntroductionSummary />
      </Container>
      <Box bg="var(--secondary-text-color)">
        <Container maxW="container.lg" p={4}>
          <SkillsGrid />
        </Container>
      </Box>
    </>
  );
}
