import { SkillsGrid } from "@/components/Index";
import PortfolioIntroductionSummary from "@/components/Portfolio Components/PortfolioIntroductionSummary";
import { Container, Box } from "@chakra-ui/react";
import Head from "next/head";
export default function Home() {
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
