import { MdKeyboardArrowRight } from "react-icons/md";
import style from "../../styles/nav.module.css";
import { Text, Button, Box, Link } from "@chakra-ui/react";
const ProjectRequestButton = ({ variant, size }) => {
  return (
    <>
      <Button colorScheme="teal" variant={variant} size={size}>
        <Link
          className={style.projectRequest}
          href="/"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          textDecoration="none"
        >
          <> Project Request</>
          <MdKeyboardArrowRight />
        </Link>
      </Button>
    </>
  );
};
export default ProjectRequestButton;
