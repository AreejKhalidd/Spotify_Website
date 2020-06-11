import React from "react";
import Chart from "react-google-charts";
import { Redirect } from 'react-router-dom'
import Search from "./Search";
import "./Statistics.css"
import SpecificStats from './SpecificStats'



const data = [
  ["", "", { role: "style" }],
  ["Listeners", 50987453, "red"],
  ["Likes", 12476598, "color: blue"] 
];
const options = {
    is3D : true,
    legend: "none"
  };

  /**
   * Statistics class fetch the total data of a specified song 
   */

class Statistics extends React.Component {
  constructor(){
    super();
        this.state={
            row:0,
            // data:[]
            
        };
  }

  // componentDidMount(){
  //   fetch("http://127.0.0.1:8080/TamalyMa3ak.json")
  //   .then((response) => response.json())
  //   .then((viewofsongs) => this.setState({ data: viewofsongs }));
  // }



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
        <h1 className="SgName">Tamaly ma3ak</h1>
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


