import React from "react";

const Post = props => {
  return (
    <div className="post">
      <h1 className="commentAuthor">{props.user}</h1>
      <span className="commentContent">{props.content}</span>
    </div>
  );
};

export default Post;
