import React from 'react';
import ReactDOM from 'react-dom';
import Cal from './Calendar';



it("Calendar renders right",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<Cal></Cal>, div);
})