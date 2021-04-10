import { Center, Grid, GridItem, Image } from "@chakra-ui/react";

const AnimePoster = () => {
  return (
    <>
      <GridItem>
        <Center>
          <Grid
            templateColumns="repeat(auto-fit, minmax(80px,1fr))"
            autoRows="80px"
            gridAutoFlow="dense"
          >
            <GridItem>
              <Image src="/AnimePosterImages/001.png"></Image>
            </GridItem>
            <GridItem>
              <Image src="/AnimePosterImages/002.jfif"></Image>
            </GridItem>
            <GridItem>
              <Image src="/AnimePosterImages/004.png"></Image>
            </GridItem>
            <GridItem>
              <Image src="/AnimePosterImages/003.jfif"></Image>
            </GridItem>
          </Grid>
        </Center>
      </GridItem>
    </>
  );
};

export default AnimePoster;
