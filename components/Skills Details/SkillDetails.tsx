import { Heading, Text, Box } from "@chakra-ui/react";
import { fontSizeHeading, fontSizeParagrapgh } from "@/components/Index";
const SkillDetails = ({ title, description, subTitle }) => {
  return (
    <>
      <Heading m={2} fontSize={fontSizeHeading}>
        {title}
        <span>{subTitle}</span>
      </Heading>

      <Text m={2} fontSize={fontSizeParagrapgh}>
        {description}
      </Text>
    </>
  );
};

export default SkillDetails;
