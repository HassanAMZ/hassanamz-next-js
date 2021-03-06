import { Text, Flex, Box, Link } from "@chakra-ui/react";
import style from "../../styles/nav.module.css";
import { ProjectRequestButton } from "../Index";
export default function Nav() {
  return (
    <>
      <Box
        as="nav"
        borderBottom="1px solid #e2e2e2"
        backgroundColor=" hsla(0, 0%, 100%, 0.6)"
        position="fixed"
        top="0"
        left="0"
        right="0"
        p={3}
        zIndex="500"
      >
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
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

            <Link className={style.linkStyles} href="/Upwork/UpworkProfile">
              Upwork
            </Link>
          </Flex>

          <ProjectRequestButton variant="solid" size="sm" />
        </Flex>
      </Box>
    </>
  );
}
