import { Center, Grid, GridItem } from "@chakra-ui/react";
import Image from "next/image";
import AnimeSinglePoster from "./AnimeSinglePoster";
const AnimePoster = () => {
  return (
    <>
      <GridItem>
        <Grid
          gap={1}
          templateColumns="repeat(auto-fill,minmax(180px,1fr))"
          autoRows="minmax(150px, auto)"
          gridAutoFlow="dense"
        >
          <AnimeSinglePoster
            alternateText="Horimiya Poster 720x1920 pixels"
            source="/AnimePosterImages/007.jfif"
            height="1280"
            width="720"
            tag1="Horimiya"
            tag2="Anime"
            date="April 10th, 2021"
          />
          <AnimeSinglePoster
            alternateText="Horimiya Poster 720x1920 pixels"
            source="/AnimePosterImages/006.jfif"
            height="1280"
            width="720"
            tag1="Horimiya"
            tag2="Anime"
            date="April 10th, 2021"
          />
          <AnimeSinglePoster
            alternateText="Horimiya Poster 720x1920 pixels"
            source="/AnimePosterImages/005.jfif"
            height="1280"
            width="1280"
            tag1="Horimiya"
            tag2="Anime"
            date="April 10th, 2021"
          />
          <AnimeSinglePoster
            alternateText="Horimiya Poster 720x1920 pixels"
            source="/AnimePosterImages/004.jfif"
            height="1280"
            width="720"
            tag1="Horimiya"
            tag2="Anime"
            date="April 10th, 2021"
          />
          <AnimeSinglePoster
            alternateText="Horimiya Poster 720x1920 pixels"
            source="/AnimePosterImages/003.jfif"
            height="1280"
            width="720"
            tag1="Horimiya"
            tag2="Anime"
            date="April 10th, 2021"
          />
          <AnimeSinglePoster
            alternateText="Horimiya Poster 720x1920 pixels"
            source="/AnimePosterImages/002.jfif"
            height="1280"
            width="720"
            tag1="Horimiya"
            tag2="Anime"
            date="April 10th, 2021"
          />
          <AnimeSinglePoster
            alternateText="Horimiya Poster 720x1920 pixels"
            source="/AnimePosterImages/001.jfif"
            height="1280"
            width="720"
            tag1="Horimiya"
            tag2="Anime"
            date="April 10th, 2021"
          />
        </Grid>
      </GridItem>
    </>
  );
};

export default AnimePoster;
