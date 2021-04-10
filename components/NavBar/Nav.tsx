import { Button, Flex, useColorMode } from "@chakra-ui/react";

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <header>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <nav>
            <Button onClick={toggleColorMode}>
              Toggle {colorMode === "light" ? "Dark" : "Light"}
            </Button>
          </nav>
        </Flex>
      </header>
    </>
  );
}
