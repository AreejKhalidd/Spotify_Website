import React from "react";
import Chart from "react-google-charts";
import { Redirect } from 'react-router-dom'
import Search from "./Search";
import "./Statistics.css"
import SpecificStats from './SpecificStats'



const data = [
  ["", "", { role: "style" }],
  ["Listeners", 2000, "red"],
  ["Likes", 600, "color: blue"] // CSS-style declaration
];
const options = {
    is3D : true,
    legend: "none"
  };


class Statistics extends React.Component {
  constructor(){
    super();
        this.state={
            row:0
            
        };
  }



  render() {
    if(this.state.row === 1){
      return (
      <div>
        <SpecificStats datatype="Listen"/>
      </div>
      );
    }
    else if(this.state.row === 2){
      return (
        <div>
          <SpecificStats datatype="Like"/>
        </div>
        );
    }
    return (
      <div className="chartstyle" >
        <h1 className="SgName">Tmly maak</h1>
        <Chart
          chartType="ColumnChart"
          width="100%"
          height="700px"
          data={data}
          options={options}
          chartEvents={[
            {
              eventName: 'select',
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart()
                const selection = chart.getSelection()
                if (selection.length === 1) {
                  const [selectedItem] = selection
                  const dataTable = chartWrapper.getDataTable()
                  const { row, column } = selectedItem
                  if(row === 0){
                    this.setState({row:1})
                  }
                  if(row === 1){
                    this.setState({row:2})
                  }
                  
                }
                
              },
            },
          ]}
  
        />
       
      </div>
    );
  }
}

export default Statistics;


