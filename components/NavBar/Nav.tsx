import { Button, Flex, useColorMode, Link } from "@chakra-ui/react";
import Paragrapgh from "../Typography/Paragrapgh";
import Title from "../Typography/Title";
export default function Nav() {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <nav>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          pb={[4]}
          pt={[4]}
        >
          <Title type="h3">
            <Link href="/">HassanAMZ</Link>
          </Title>
          <Flex
            flexDirection="row"
            alignItems="space-between"
            justifyContent="space-between"
          >
            <Paragrapgh type="p">
              <Link href="/portfolio">About</Link>
            </Paragrapgh>
            {/* <Paragrapgh type="p">
              <Link href="/wordking">Test</Link>
            </Paragrapgh> */}
          </Flex>
          {/* <Button onClick={toggleColorMode}>C</Button> */}
        </Flex>
      </nav>
    </>
  );
}
