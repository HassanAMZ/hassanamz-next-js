import { Flex, Link } from "@chakra-ui/react";
import Layout from "../components/Layout/Layout";
export default function Home() {
  return (
    <Layout>
      <Flex
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
    </Layout>
  );
}
