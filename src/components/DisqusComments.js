import React from "react";
import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ post }) => {
  const disqusShortname = "jacklyons-me";
  const disqusConfig = {
    url: post.url,
    identifier: post.id,
    title: post.title,
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default DisqusComments;
