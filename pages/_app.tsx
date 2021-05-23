import { ChakraProvider, Box } from "@chakra-ui/react";
import "../styles/global.css";
import GoogleTagManager from "../components/Google Tag Manager/GoogleTagManager";
import Nav from "../components/NavBar/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager>
        <ChakraProvider>
          <Nav />
          <Component {...pageProps} />
        </ChakraProvider>
      </GoogleTagManager>
    </>
  );
}

export default MyApp;
