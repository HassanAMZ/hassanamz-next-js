import { Heading, Text, Box } from "@chakra-ui/react";

const SkillDetails = ({ title, description, subTitle }) => {
  return (
    <>
      <Heading m={2}>{title}</Heading>
      <Heading m={2}>{subTitle}</Heading>

      <Text m={2}>{description}</Text>
    </>
  );
};

export default SkillDetails;
