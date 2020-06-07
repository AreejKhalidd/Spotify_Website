import React from 'react';
import ReactDOM from 'react-dom';
import Subnavbar from "../Components/Subnavbar";

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { create } from 'react-test-renderer';

configure({adapter: new Adapter()});
describe('<Subnavbar/>', () => {

    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(<Subnavbar />);
    });

///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<Subnavbar></Subnavbar>,div)
});

});