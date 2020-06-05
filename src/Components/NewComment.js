import React, { Component } from "react";

/**
 * @property {Class} NewComment that renders user comment with his name and date that comment was posted on
 * @param {void}
 * @returns {void}
 */
class NewComment extends Component {
  render() {
    return (
      <div className="block-comment-content module text">
        <div className="comment-user">
          <div className="comment-user-avatar-wrap">
            <a>
              <img
                src="//s3-us-west-2.amazonaws.com/s.cdpn.io/3/profile/profile-512_29.jpg"
                className="comment-avatar"
                alt=""
              />
            </a>
          </div>
          <div className="comment-user-text">
            <a href="#0" data-username="cathbailh" className="comment-username">
              {/* <span className="username">{this.props.details.commentName}</span> */}
              <span className="username">Mohamed</span>
            </a>
            <span className="on"> on </span>
            <a href="#0">
              <time className="block-comment-time">
                {new Date().toLocaleString()}
              </time>
            </a>
          </div>
        </div>

        <div className="comment-text">
          <p>{this.props.details.commentBody}</p>
        </div>
      </div>
    );
  }
}
export default NewComment;
