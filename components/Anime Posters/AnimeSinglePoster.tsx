import { Box, Badge, GridItem } from "@chakra-ui/react";
import Image from "next/image";
const AnimeSinglePoster = ({
  source,
  alternateText,
  height,
  width,
  tag1,
  tag2,
  date,
}) => {
  const boxProperty = {
    maxWidth: [250, 500],
    padding: [3, 5, 7],
  };
  return (
    <>
      <GridItem>
        <Box
          maxW={boxProperty.maxWidth}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image
            height={height}
            width={width}
            alt={alternateText}
            src={source}
          />

          <Box p={boxProperty.padding}>
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                New
              </Badge>
              <Box
                color="var(--secondary-text-color)"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
              >
                {tag1}, {tag2}
              </Box>
            </Box>

            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {alternateText}
            </Box>

            <Box>
              <Box as="span" color="var(--main-text-color)" fontSize="sm">
                10$
              </Box>
            </Box>

            <Box d="flex" mt="2" alignItems="center">
              <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {date}
              </Box>
            </Box>
          </Box>
        </Box>
      </GridItem>
    </>
  );
};

export default AnimeSinglePoster;
