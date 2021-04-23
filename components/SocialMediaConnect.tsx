import { Center, Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import ConnectLinks from "./Social Media Links/ConnectLinks";

import { FaInstagram, FaYoutube } from "react-icons/fa";
export default function SocialMediaConnect() {
  const customFontSize = ["sm", "md", "lg", "xl"];
  const fiverrLink = "https://fiverr.com/hassanamz";
  const instagramLink = "https://instagram.com/hassandevelops";
  const upworkLink = "https://upwork.com/fl/hassanamz";
  const youtubeLink =
    "https://www.youtube.com/channel/UCfB_dBMG9TK2RlPsJdSXYSw?sub_confirmation=1";

  return (
    <>
      <Heading mb={4} as="h1" fontSize={["md", "lg", "xl"]} textAlign="center">
        Connect With Hassan
      </Heading>
      <Center fontSize={customFontSize}>
        <Grid
          alignItems="center"
          justifyContent="center"
          templateColumns="minmax(auto, max-content) minmax(auto, max-content)"
          gap={4}
        >
          <GridItem>
            <Link target="_blank" href={youtubeLink}>
              <FaYoutube />
            </Link>
          </GridItem>
          <ConnectLinks links={youtubeLink} socialMediaPlatform="Youtube" />
          <GridItem>
            <Link target="_blank" href={fiverrLink}></Link>
          </GridItem>
          <ConnectLinks links={fiverrLink} socialMediaPlatform="Fiverr" />
          <GridItem>
            <Link target="_blank" href={instagramLink}>
              <FaInstagram />
            </Link>
          </GridItem>
          <ConnectLinks links={instagramLink} socialMediaPlatform="Instagram" />
          <GridItem>
            <Link target="_blank" href={upworkLink}></Link>
          </GridItem>
          <ConnectLinks links={upworkLink} socialMediaPlatform="Upwork" />
        </Grid>
      </Center>
    </>
  );
}
