import { Flex, Link } from "@chakra-ui/react";
import SocialMediaConnect from "../components/SocialMediaConnect";

export default function Home() {
  return (
    <>
      <Flex
        bg="var(--main-bg-color)"
        color="var(--main-text-color)"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="100vh"
      >
        <h1>Website Under Construciton</h1>
        <div>
          <Link href="/working">For Test Site</Link>
        </div>
      </Flex>
    </>
  );
}
