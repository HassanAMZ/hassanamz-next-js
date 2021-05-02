import { Text, Flex, Box, Link } from "@chakra-ui/react";
import style from "../../styles/nav.module.css";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Nav() {
  return (
    <>
      <Box as="nav" className={style.transparentNav}>
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          pb={[2, 4]}
          pt={[2, 4]}
          pr={2}
          pl={2}
          maxW="container.lg"
          margin="auto"
        >
          <Link className={style.linkStyles} href="/" fontWeight="bold">
            Shahzada A. Hassan
          </Link>
          <Flex
            flexDirection="row"
            alignItems="space-between"
            justifyContent="space-between"
            className={style.hiddenOnMobile}
          >
            <Link className={style.linkStyles} mr={4} href="portfolio">
              About
            </Link>

            <Link className={style.linkStyles} href="working">
              Testing
            </Link>
          </Flex>
          <Link
            className={style.projectRequest}
            href="/"
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <> Project Request</>
            <MdKeyboardArrowRight />
          </Link>
        </Flex>
      </Box>
    </>
  );
}
