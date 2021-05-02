import YouTubeCardSubs from "../components/Youtube/YouTubeCardSubs";
import YouTubeCardVids from "../components/Youtube/YouTubeCardVids";
import YouTubeCardViews from "../components/Youtube/YouTubeCardViews";
import { Grid, Center, Heading } from "@chakra-ui/react";
const Youtube = () => {
  const youtubeLink =
    "https://www.youtube.com/channel/UCfB_dBMG9TK2RlPsJdSXYSw?sub_confirmation=1";
  const customFontSize = ["sm", "md", "lg", "xl"];
  return (
    <>
      <Heading as="h1">Youtube Stats</Heading>
      <Center fontSize={customFontSize}>
        <Grid
          alignItems="center"
          justifyContent="center"
          templateColumns="minmax(auto, max-content) minmax(auto, max-content)"
          gap={4}
        >
          <YouTubeCardSubs links={youtubeLink} />
          <YouTubeCardVids links={youtubeLink} />
          <YouTubeCardViews links={youtubeLink} />
        </Grid>
      </Center>
    </>
  );
};

export default Youtube;
