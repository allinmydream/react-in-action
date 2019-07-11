import React from "react";

const CommentSection = props => {
  return (
    <div className="comment">
      <h2 className="commentUser">{props.user}</h2>
      <span className="commentContent">{props.content}</span>
    </div>
  );
};

export default CommentSection;
