import React, { Component } from "react";
import Post from "./Post";
import CommentSection from "./CommentSection";
import CreateComment from "./CreateComment";

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments
    };
    this.handleCreateComment = this.handleCreateComment.bind();
  }

  handleCreateComment = comment => {
    const comments = this.state.comments;
    comment.id = Date.now();
    const newComments = comments.concat([comment]);
    this.setState({
      comments: newComments
    });
  };

  render() {
    const post = this.props.post;
    return (
      <div className="commentBox">
        <Post id={post.id} user={post.user} content={post.content} />
        {this.state.comments.map(comment => {
          return (
            <CommentSection
              key={comment.id}
              user={comment.user}
              content={comment.content}
            />
          );
        })}
        <CreateComment onCreateComment={this.handleCreateComment} />
      </div>
    );
  }
}

export default CommentBox;
