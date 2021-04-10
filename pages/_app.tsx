import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
import GoogleTagManager from "../components/Google Tag Manager/GoogleTagManager";

function MyApp({ Component, pageProps }) {
  return (
    <GoogleTagManager>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </GoogleTagManager>
  );
}

export default MyApp;
