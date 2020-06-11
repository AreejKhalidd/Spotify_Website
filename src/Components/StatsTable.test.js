import React from 'react';
import ReactDOM from 'react-dom';
import StatsTable from './StatsTable';



it("Stats Table renders right",() =>{
    const div = document.createElement("div");
    ReactDOM.render(<StatsTable></StatsTable>, div);
})