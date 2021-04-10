import { Center, Link, GridItem } from "@chakra-ui/react";

const ConnectLinks = ({ links, socialMediaPlatform }) => {
  return (
    <>
      <GridItem>
        <Center>
          <Link target="_blank" href={links}>
            {socialMediaPlatform}
          </Link>
        </Center>
      </GridItem>
    </>
  );
};

export default ConnectLinks;
