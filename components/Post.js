import React from "react";

function Post({ post }) {
  return (
    <div>
      <img src={post.photoUrl} />
      <p>{post.input}</p>
    </div>
  );
}

export default Post;
