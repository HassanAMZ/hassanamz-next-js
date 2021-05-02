import { Heading } from "@chakra-ui/react";
import {
  PortfolioIntroductionDetailed,
  PortfolioIntroductionSummary,
} from "../components/Portfolio Components/Index";
export default function Portfolio() {
  return (
    <>
      <Heading type="h3">About</Heading>
      <PortfolioIntroductionSummary />
      <PortfolioIntroductionDetailed />
    </>
  );
}
