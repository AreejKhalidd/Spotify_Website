import React from 'react';
import ReactDOM from 'react-dom';
import ProfilePicChanger from "../Components/ProfilePicChanger";

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { create } from 'react-test-renderer';

configure({adapter: new Adapter()});
describe('<ProfilePicChanger/>', () => {

    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(<ProfilePicChanger />);
    });

///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<ProfilePicChanger></ProfilePicChanger>,div)
});

});