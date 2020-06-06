import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Movetoprem from "./Movetoprem";

//
configure({adapter: new Adapter()});

describe('<Movetoprem />', () => {

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<Movetoprem />);
  });

///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<Movetoprem ></Movetoprem>,div)
})
/////
it("Make update in details", async () => {
    const component = create (<Movetoprem />);
    const instance = component.getInstance();
    await instance.moveprem();
    console.log(instance.state) 
  });
//Buttons
it('cancel edits button renders ', () => {
    expect(wrapper.find('.button5')).toHaveLength(1);
  });
  it('moveprem button renders ', () => {
    expect(wrapper.find('.button1')).toHaveLength(1);
  });
  it('check code button renders ', () => {
    expect(wrapper.find('.button3')).toHaveLength(1);
  });
  it('send code button renders ', () => {
    expect(wrapper.find('.button6')).toHaveLength(1);
  });
  //Inputs
  //Must have password
  it('user must enter new password and code',()=>{
    expect(wrapper.find('input#codeid')).toHaveLength(1) 

  });
  









});