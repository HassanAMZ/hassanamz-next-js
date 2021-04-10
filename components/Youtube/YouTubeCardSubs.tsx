import React from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";
import { GridItem, Link } from "@chakra-ui/react";

const YouTubeCardSubs = ({ links }) => {
  const { data, error } = useSWR("/api/youtube", fetcher);
  const subscriberCount = data?.subscriberCount ?? "loading...";

  return (
    <>
      <GridItem>
        <Link target="_blank" href={links}>
          YouTube Subscribers
        </Link>
      </GridItem>
      <GridItem textAlign="right">
        <Link target="_blank" href={links}>
          {subscriberCount}
        </Link>
      </GridItem>
    </>
  );
};

export default YouTubeCardSubs;
