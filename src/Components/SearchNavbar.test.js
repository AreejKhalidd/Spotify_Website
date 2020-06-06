import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchNavbar from "./SearchNavbar";

it("SearchNavbar renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SearchNavbar></SearchNavbar>, div);
});

