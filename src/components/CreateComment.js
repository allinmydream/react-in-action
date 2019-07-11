import React, { Component } from "react";

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      content: ""
    };
    this.handleSubmitComment = this.handleSubmitComment.bind();
    this.handleTextChange = this.handleTextChange.bind();
    this.handleUserChange = this.handleUserChange.bind();
  }
  handleUserChange = e => {
    this.setState({
      user: e.target.value
    });
  };
  handleTextChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmitComment = e => {
    e.preventDefault();
    this.props.onCreateComment({
      user: this.state.user.trim(),
      content: this.state.user.trim()
    });
  };
  render() {
    const { handleTextChange, handleUserChange, handleSubmitComment } = this;
    return (
      <div className="createComment">
        <input
          type="text"
          placeholder="Your name"
          onChange={handleUserChange}
        />
        <br />
        <input type="text" placeholder="Thought?" onChange={handleTextChange} />
        <br />
        <button type="submit" onClick={handleSubmitComment}>
          Comment Post
        </button>
      </div>
    );
  }
}

export default CreateComment;
