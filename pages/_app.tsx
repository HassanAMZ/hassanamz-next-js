import { ChakraProvider, Box } from "@chakra-ui/react";
import "../styles/global.css";
import GoogleTagManager from "../components/Google Tag Manager/GoogleTagManager";
import Nav from "../components/NavBar/Nav";

import React from "react";
import App from "next/app";
import { AnimatePresence } from "framer-motion";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
    // <Component/> returns the component it self
    // pageProps returns the props you use to in that component. It can be any data
    // router.route returns the route your component lives on. So in our case it will be '/' or '/products/[id]'
    // exitBeforeEnter: AnimatePresence will only render one component at a time. The exiting component will finished its exit animation before the entering component is rendered
    return (
      <>
        <GoogleTagManager>
          <AnimatePresence exitBeforeEnter>
            <ChakraProvider>
              <Nav />
              <Component {...pageProps} key={router.route} />
            </ChakraProvider>
          </AnimatePresence>
        </GoogleTagManager>
      </>
    );
  }
}

export default MyApp;
