import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import { create } from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchforSongsArt from  "./SearchforSongsArt";

//
configure({adapter: new Adapter()});

describe('<SearchforSongsArt />', () => {

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<SearchforSongsArt />);
  });

///to check it render correct, to run -> npm test
it("renders without crashing",()=>{
const div =document.createElement("div");
ReactDOM.render(<SearchforSongsArt></SearchforSongsArt>,div)
})

  /* in search nav bar
  //Must have SearchforSongsArt key to SearchforSongsArt by it
  it('Must have SearchforSongsArt key to SearchforSongsArt by it',()=>{
    expect(wrapper.find('input#SearchforSongsArtkey')).toHaveLength(1) 
  });
  */









});