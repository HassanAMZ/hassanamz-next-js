import { Flex } from "@chakra-ui/react";
import Headline from "../components/Typography/Headline";
import PortfolioIntroductionSummary from "../components/Portfolio Components/PortfolioIntroductionSummary";
import PortfolioIntroductionDetailed from "../components/Portfolio Components/PortfolioIntroductionDetailed";

export default function Home() {
  return (
    <Flex flexDirection="column">
      <Headline type="h2">Hey, I'm Shahzada Ali Hassan</Headline>
      <PortfolioIntroductionSummary />
    </Flex>
  );
}
