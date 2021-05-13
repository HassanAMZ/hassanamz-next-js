import { Heading, Grid, GridItem } from "@chakra-ui/react";
import { SkillDetails } from "../Index";
const SkillsGrid = () => {
  return (
    <>
      <Grid
        gap={4}
        templateColumns={["repeat( auto-fit, minmax(250px, 1fr) )"]}
        autoFlow="dense"
        autoRows="repeat( auto-fit, minmax(20px, 1fr) )"
        justifyItems="stretch"
      >
        <GridItem colSpan={1} p={4} bg="white" borderRadius="20px">
          <SkillDetails
            title="Design and Development."
            subTitle="All from one hand."
            description="As a Webflow expert, I provide everything from one source - web design as well as web development. So you have one contact person for the whole process, from start to finish. And for development-only projects, my eye for design helps me to realize layouts the way they were meant to be."
          />
        </GridItem>
        <GridItem colSpan={[1, 2, 2]} p={4} bg="white" borderRadius="20px">
          <SkillDetails title="" subTitle="" description="" />
        </GridItem>
        <GridItem colSpan={1} p={4} bg="white" borderRadius="20px">
          <SkillDetails
            title="Fast development workflow."
            subTitle="Lightning fast."
            description=""
          />
        </GridItem>
        <GridItem p={4} bg="white" borderRadius="20px">
          <SkillDetails
            title="A powerful CMS."
            subTitle="For your content."
            description="Complete & efficient control over your content. And with dedicated landing page CMS templates, your team can take marketing to the next level."
          />
        </GridItem>
        <GridItem p={4} bg="white" borderRadius="20px">
          <SkillDetails
            title="The basics."
            subTitle="Of course."
            description="Complete & efficient control over your content. And with dedicated landing page CMS templates, your team can take marketing to the next level."
          />
        </GridItem>
      </Grid>
    </>
  );
};

export default SkillsGrid;
