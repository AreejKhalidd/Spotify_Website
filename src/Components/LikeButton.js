import React from "react";
import "./LikeButton.css";

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false,
      color: "white",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({
      liked: !this.state.liked,
    });
    if (this.state.color == "white") {
      this.setState({ color: "green" });
    } else {
      this.setState({ color: "white" });
    }
  };

  render() {
    const text = this.state.liked ? "liked" : "haven't liked";
    return (
      <div className="customContainer">
        <button className="heartBtn" style={{ color: this.state.color }}>
          <i className="fas fa-heart fullHeart" onClick={this.handleClick}></i>
        </button>
        <p>you {text} this. Click to toggle.</p>
      </div>
    );
  }
}
export default LikeButton;
