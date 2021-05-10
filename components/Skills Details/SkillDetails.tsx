import { Heading, Text, GridItem } from "@chakra-ui/react";

const SkillDetails = ({ title, description }) => {
  return (
    <>
      <GridItem p={4} bg="white" borderRadius="20px">
        <Heading m={2}>{title}</Heading>
        <Text m={2}>{description}</Text>
      </GridItem>
    </>
  );
};

export default SkillDetails;
