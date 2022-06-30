import Giscus from "@giscus/react";

const Comment = () => {
  return (
    <Giscus
      id="comments"
      repo="kubre/kubre.in"
      repoId="R_kgDOHjf5Dw"
      category="Announcements"
      categoryId="DIC_kwDOHjf5D84CP9az"
      mapping="og:title"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  );
};

export default Comment;
