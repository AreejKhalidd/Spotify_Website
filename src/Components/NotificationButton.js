import React, { Component } from "react";
import ReactNotification, { store } from "react-notifications-component";
import { Notification } from "./Notification";
import "react-notifications-component/dist/theme.css";
import "./NotificationButton.css";

/**
 * Notification Button that user uses to see what's new
 */
class NotificationButton extends Component {
  constructor() {
    super();
    this.state = {
      data: Notification,
    };
  }
  // componentDidMount() {
  //   let url = "http://localhost:8080/notification/1";
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       this.setState({ data: resp });
  //     });
  //   });
  // }

  /**
   * Handle Notifications
   * @param {void}
   * @returns {1} - 1 is only for testing
   */

  handleNotification = () => {
    let data = this.state.data[0];
    store.addNotification({
      title: data.Header,
      message: data.message,
      type: "danger",
      container: "top-left",
      insert: "top",
      animationIN: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        showIcon: true,
      },
      width: 300,
    });
    return 1;
  };

  render() {
    let notification = this.state.data;

    return (
      <li>
        <ReactNotification />
        <button
          className="whatsNewNtn"
          onClick={this.handleNotification}
          style={{ float: "left" }}
        >
          {" "}
          whats New
          <span className="num">{notification[0].id}</span>
        </button>
      </li>
    );
  }
}

export default NotificationButton;
