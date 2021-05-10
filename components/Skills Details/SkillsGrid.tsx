import { Heading, Grid, GridItem } from "@chakra-ui/react";
import { SkillDetails } from "../Index";
const SkillsGrid = () => {
  return (
    <>
      <Grid gap={4}>
        <SkillDetails
          title="Design and Development. All from one hand."
          description="As a Webflow expert, I provide everything from one source - web design as well as web development. So you have one contact person for the whole process, from start to finish. And for development-only projects, my eye for design helps me to realize layouts the way they were meant to be."
        />
        <SkillDetails
          title="Fast development workflow. Lightning fast."
          description=""
        />
        <SkillDetails
          title="A powerful CMS. For your content."
          description="Complete & efficient control over your content. And with dedicated landing page CMS templates, your team can take marketing to the next level."
        />{" "}
        <SkillDetails
          title="The basics. Of course."
          description="Complete & efficient control over your content. And with dedicated landing page CMS templates, your team can take marketing to the next level."
        />
      </Grid>
    </>
  );
};

export default SkillsGrid;
