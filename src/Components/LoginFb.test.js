import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from "../Components/loginForm";

import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { create } from 'react-test-renderer';
import Loginform from '../Components/loginForm';

configure({adapter: new Adapter()});
describe('<Loginform/>', () => {

    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(<Loginform />);
    });


it('should have Facebook appID', () => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);

    const div = document.createElement('div');

    ReactDOM.render(<Loginform />, div);
    ReactDOM.unmountComponentAtNode(div);

    const wrapper = mount(<Loginform />);
    const facebookButton = wrapper.find('#one');
    const appId = wrapper.find('appId');

    expect(appId).toBeDefined();
    expect(appId).not.toBe('');
  });


});