import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ForgetPassword from  "./ForgetPassword";

//
configure({adapter: new Adapter()});

describe('<ForgetPassword />', () => {

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<ForgetPassword />);
  });

///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<ForgetPassword></ForgetPassword>,div)
})
/////
it("Make update in details", async () => {
    const component = create (<ForgetPassword/>);
    const instance = component.getInstance();
    await instance.saveEdit();
    console.log(instance.state) 
  });
//Buttons
it('cancel edits button renders ', () => {
    expect(wrapper.find('.button1')).toHaveLength(1);
  });

  it('save edits button renders ', () => {
    expect(wrapper.find('#editt')).toHaveLength(1);
  });
 
 
  //Inputs
  //Must have password
  it('user must enter new password and code',()=>{
    expect(wrapper.find('input#codeid')).toHaveLength(1) &&
    expect(wrapper.find('input#newpassid')).toHaveLength(1)

  });
  









});