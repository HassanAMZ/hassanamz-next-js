import { Headline } from "../components/Index";
import {
  PortfolioIntroductionDetailed,
  PortfolioIntroductionSummary,
} from "../components/Portfolio Components/Index";
export default function Portfolio() {
  return (
    <>
      <Headline type="h3">About</Headline>
      <PortfolioIntroductionSummary />
      <PortfolioIntroductionDetailed />
    </>
  );
}
