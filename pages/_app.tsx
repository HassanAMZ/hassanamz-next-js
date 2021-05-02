import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
import GoogleTagManager from "../components/Google Tag Manager/GoogleTagManager";
import Nav from "../components/NavBar/Nav";
import { Theme } from "../components/Index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleTagManager>
        <ChakraProvider theme={Theme}>
          <Nav />
          <Component {...pageProps} />
        </ChakraProvider>
      </GoogleTagManager>
    </>
  );
}

export default MyApp;
