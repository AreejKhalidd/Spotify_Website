import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import EditPassword from  "./EditPassword";

//
configure({adapter: new Adapter()});

describe('<EditPassword />', () => {

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<EditPassword />);
  });

///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<EditPassword></EditPassword>,div)
})
/////
it("Make update in details", async () => {
    const component = create (<EditPassword/>);
    const instance = component.getInstance();
    await instance.saveEdit();
    console.log(instance.state) 
  });
//Buttons
it('cancel edits button renders ', () => {
    expect(wrapper.find('.button1')).toHaveLength(1);
  });
  it('save edits button renders ', () => {
    expect(wrapper.find('.button2')).toHaveLength(1);
  });
  //Inputs
  //Must have password
  it('user must enter old and new password',()=>{
    expect(wrapper.find('input#passid')).toHaveLength(1) &&
    expect(wrapper.find('input#newpassid')).toHaveLength(1)

  });
  









});