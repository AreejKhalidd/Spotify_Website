import React from 'react';
import ReactDOM from 'react-dom';
import Ads from './AdsBar';



it("Ads bar renders right",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<Ads></Ads>, div);
})