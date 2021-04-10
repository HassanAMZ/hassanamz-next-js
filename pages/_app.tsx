import GoogleTagManager from "../components/google tag manager/GoogleTagManager";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
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
