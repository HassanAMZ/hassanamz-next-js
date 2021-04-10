import useSWR from "swr";
import fetcher from "../../lib/fetcher";

import { GridItem, Link } from "@chakra-ui/react";

const YouTubeCardVids = ({ links }) => {
  const { data, error } = useSWR("/api/youtube", fetcher);
  const videoCount = data?.videoCount ?? "loading...";
  return (
    <>
      <GridItem>
        <Link target="_blank" href={links}>
          YouTube Videos
        </Link>
      </GridItem>
      <GridItem textAlign="right">
        <Link target="_blank" href={links}>
          {videoCount}
        </Link>
      </GridItem>
    </>
  );
};

export default YouTubeCardVids;
