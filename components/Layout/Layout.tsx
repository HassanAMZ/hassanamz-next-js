import { Flex, Link } from "@chakra-ui/react";
import Nav from "../NavBar/Nav";
export default function Layout({ children }) {
  return (
    <>
      <Nav />
      {children}
    </>
  );
}
