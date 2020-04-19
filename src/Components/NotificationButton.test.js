import React from "react";
import NotificationButton from "./NotificationButton";
import renderer from "react-test-renderer";

test("HandleNotification function testing", () => {
  let component = renderer.create(<NotificationButton />).getInstance();
  let tree = component.handleNotification();
  expect(tree).toBe(1);
});
