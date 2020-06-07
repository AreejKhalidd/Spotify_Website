import React, { Component } from "react";

/**
 * @property {Class} AddCommentForm that renders input text for user comment
 * @param {void}
 * @returns {void}
 */
class AddCommentForm extends Component {
  processComment = (event) => {
    event.preventDefault();

    // 1. Take data from from form
    var commentData = {
      //   commentName: this.refs.name.value,
      commentBody: this.refs.desc.value,
    };

    // 2. Pass data back to App
    this.props.addComment(commentData);

    // 3. Reset the form
    this.refs.commentForm.reset();
  };

  render() {
    return (
      <div className="callout secondary">
        <form
          className="post-edit"
          ref="commentForm"
          onSubmit={this.processComment}
        >
          {/* <input
            className="usernameInput"
            type="text"
            ref="name"
            placeholder="Your Name"
            required
          /> */}
          <input
            className="commentInput"
            ref="desc"
            placeholder="Add your comment here"
            required
          />
          <button id="submit" type="submit" className="addCommentBtn">
            Add Comment
          </button>
        </form>
      </div>
    );
  }
}
export default AddCommentForm;
