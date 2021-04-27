import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
import { Container, Flex } from "@chakra-ui/layout";
import GoogleTagManager from "../components/Google Tag Manager/GoogleTagManager";
import Nav from "../components/NavBar/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager>
        <ChakraProvider>
          <Container maxW="container.lg">
            <Flex flexDirection="column" mt={2} ml={[2, 4]} mr={[2, 4]}>
              <Nav />
              <Flex flexDirection="column" ml={[2, 4]} mr={[2, 4]}>
                <Component {...pageProps} />
              </Flex>
            </Flex>
          </Container>
        </ChakraProvider>
      </GoogleTagManager>
    </>
  );
}

export default MyApp;
