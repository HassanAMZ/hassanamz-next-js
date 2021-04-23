import { Container } from "@chakra-ui/layout";
import Nav from "../NavBar/Nav";
export default function Layout({ children }) {
  return (
    <>
      <Container>
        <Nav />
        {children}
      </Container>
    </>
  );
}
