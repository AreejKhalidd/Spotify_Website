import React from 'react';
import ReactDOM from 'react-dom';
import SpecificStats from './SpecificStats';



it("SpecificStats renders right",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<SpecificStats datatype="Listen" ></SpecificStats>, div);
})