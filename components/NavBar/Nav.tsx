import { Button, Flex, useColorMode, Link } from "@chakra-ui/react";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <nav>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Link href="/">HassanAMZ</Link>

          <Button onClick={toggleColorMode}>
            {colorMode === "Dark" ? "Light" : "Dark"}
          </Button>
        </Flex>
      </nav>
    </>
  );
}
