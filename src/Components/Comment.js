import React, { Component } from "react";
import Modal from "react-awesome-modal";
import CommentForm from "./CommentForm";
import { Scrollbars } from "react-custom-scrollbars";

export default class CommentWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <section>
        <button className="commentBtn">
          <i
            class="fa fa-comment"
            aria-hidden="true"
            onClick={() => this.openModal()}
          ></i>
          {/* <input type="button" value="Open" onClick={() => this.openModal()} /> */}
        </button>
        <Modal
          visible={this.state.visible}
          width="600"
          min-height="700"
          effect="fadeInLeft"
          onClickAway={() => this.closeModal()}
        >
          <Scrollbars style={{ height: "100vh" }}>
            <div style={{ height: "1000px", backgroundColor: "rgb(25,25,25)" }}>
              <h1 style={{ paddingTop: "25px", color: "White" }}>
                Add Your Comment
              </h1>
              <div>{<CommentForm />}</div>
              <a
                href="javascript:void(0);"
                style={{
                  paddingTop: "120px",
                  color: "#1db954",
                  fontSize: "24px",
                  paddingLeft: "10px",
                }}
                onClick={() => this.closeModal()}
              >
                Close
                <i class="far fa-window-close"></i>
              </a>
            </div>
          </Scrollbars>
        </Modal>
      </section>
    );
  }
}
