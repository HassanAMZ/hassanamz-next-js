import { MdKeyboardArrowRight } from "react-icons/md";
import style from "../../styles/nav.module.css";
import { Text, Button, HStack, Link } from "@chakra-ui/react";
const ProjectRequestButton = ({ variant, size }) => {
  return (
    <>
      <Button colorScheme="teal" variant={variant} size={size}>
        <Link className={style.projectRequest} href="/" textDecoration="none">
          <HStack align="center" justify="center">
            <> Project Request</>
            <MdKeyboardArrowRight />
          </HStack>
        </Link>
      </Button>
    </>
  );
};
export default ProjectRequestButton;
