import React from 'react';
import ReactDOM from 'react-dom';
import Statistics from './Statistics';



it("Statistics renders right",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<Statistics></Statistics>, div);
})