import { Grid, Box, Heading, GridItem, Text } from "@chakra-ui/react";
import {
  fontSizeTitle,
  fontSizeHeading,
  fontSizeParagrapgh,
  ProjectRequestButton,
} from "@/components/Index";

import Image from "next/image";
export default function PortfolioIntroductionSummary() {
  return (
    <>
      <Grid
        templateColumns={["1fr", "1fr", "1fr 2fr"]}
        justifyContent="center"
        alignItems="center"
      >
        <GridItem w={275} m={4} alignSelf="center" justifySelf="center">
          <Image
            height={1000}
            width={1000}
            src="/Images/profileImage001.png"
            alt="Picture of the Shahzada Ali Hassan"
          />
        </GridItem>
        <GridItem
          alignSelf={["center", "center", "flex-start"]}
          justifySelf="space-between"
          alignItems="center"
          m={["0", "4"]}
        >
          <Text
            textAlign={["center", "center", "left"]}
            as="h2"
            fontSize={fontSizeHeading}
          >
            Shahzada Ali Hassan
          </Text>
          <Heading
            textAlign={["center", "center", "left"]}
            as="h1"
            fontSize={fontSizeTitle}
          >
            Web & Server Analyst
          </Heading>
          <Text
            textAlign={["center", "center", "left"]}
            as="p"
            fontSize={fontSizeParagrapgh}
          >
            Plan, develop and manage web tracking for Facebook, Google,
            Pinterest, HotJar and other analytics using Google Tag Manager Web
            and Server Containers.
          </Text>
          <Grid placeContent={["center", "center", "start"]}>
            <ProjectRequestButton variant="outline" size="md" />
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
}
