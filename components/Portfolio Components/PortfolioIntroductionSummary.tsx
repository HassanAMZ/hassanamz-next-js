import { Flex, Grid, Box, Heading, GridItem, Text } from "@chakra-ui/react";
import Paragrapgh from "../Typography/Paragrapgh";
import { ProjectRequestButton } from "../Index";
import Image from "next/image";
export default function PortfolioIntroductionSummary() {
  const fontSize = ["md", "lg", "xl"];
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
            mt={[4]}
            fontWeight="bold"
            fontSize={fontSize}
          >
            Shahzada Ali Hassan
          </Text>
          <Heading
            textAlign={["center", "center", "left"]}
            as="h1"
            mt={2}
            fontSize={["3xl", "4xl", "6xl"]}
          >
            Next JS & GTM Expert
          </Heading>
          <Text
            textAlign={["center", "center", "left"]}
            as="p"
            mt={2}
            mb={4}
            fontSize={fontSize}
          >
            Web Design, Development & Analytics for companies that want to grow
            their business with a great website.
          </Text>
          <Grid placeContent={["center", "center", "start"]}>
            <ProjectRequestButton variant="outline" size="md" />
          </Grid>
        </GridItem>
      </Grid>
    </>
  );
}
