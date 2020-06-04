import React from "react";
import "./AddCommentForm.css";
import AddCommentForm from "./AddCommentForm";
import NewComment from "./NewComment";
class CommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      comments: {},
    };
  }

  addComment = (commentData) => {
    // (foo, bar, ...args) => {};

    var timeStamp = new Date().getTime();

    this.state.comments["comment-id" + timeStamp] = commentData;
    this.setState({
      comments: this.state.comments,
    });
  };

  renderComment = (key) => {
    return (
      <li className="">
        <NewComment key={key} index={key} details={this.state.comments[key]} />
      </li>
    );
  };

  render() {
    return (
      <div className="row medium-8 large-7 columns">
        <ol className="comment-list block-comments">
          {Object.keys(this.state.comments)
            // Creating a NEW array
            .map(this.renderComment)}
        </ol>

        <AddCommentForm addComment={this.addComment} />

        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
      </div>
    );
  }
}

export default CommentForm;
