import React from "react";
import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ post }) => {
  console.log({ post: post.url });
  const disqusShortname = "jacklyons-me";
  const disqusConfig = {
    url: "https://jacks-website-8f246.netlify.app" + post.url,
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
