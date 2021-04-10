import { GridItem, Link } from "@chakra-ui/react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";

const YouTubeCardViews = ({ links }) => {
  const { data, error } = useSWR("/api/youtube", fetcher);
  if (error) {
    console.log(error);
  }
  const viewCount = data?.viewCount ?? "loading...";
  return (
    <>
      <GridItem>
        <Link target="_blank" href={links}>
          YouTube Views
        </Link>
      </GridItem>
      <GridItem textAlign="right">
        <Link target="_blank" href={links}>
          {viewCount}
        </Link>
      </GridItem>
    </>
  );
};

export default YouTubeCardViews;
