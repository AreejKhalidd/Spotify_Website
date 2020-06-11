import React from 'react';
import ReactDOM from 'react-dom';
import Songbar from './Songbar';



it("Song bar renders right",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<Songbar></Songbar>, div);
})