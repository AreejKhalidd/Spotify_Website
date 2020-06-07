import React, {Component} from "react";
import Chart from "react-google-charts";
import "./Statistics.css"



const dayLdata = [
    ["", "", { role: "style" }],
    ["1/6", 5000, "red"],
    ["2/6", 10000, "red"],
    ["3/6", 30000, "red"],
    ["4/6", 35000, "red"],
    ["5/6", 55000, "red"],
    ["6/6", 67000, "red"],
    ["7/6", 63000, "red"],
    ["8/6", 21000, "red"],
    ["9/6", 13000, "red"],
    ["10/6",15000, "red"],
    ["11/6",18000, "red"],
    ["12/6",30000 , "red"],
    ["13/6",23000, "red"],
    ["14/6",42000, "red"],
    ["15/6",34000, "red"],
    ["16/6",39000, "red"],
    ["17/6",45000, "red"],
    ["18/6",44000, "red"],
    ["19/6",52000, "red"],
    ["20/6",48000, "red"],
    ["21/6",47000, "red"],
    ["22/6",54000, "red"],
    ["23/6",66000, "red"],
    ["24/6",57000, "red"],
    ["25/6",62000, "red"],
    ["26/6",67000, "red"],
    ["27/6",71000, "red"],
    ["28/6",69000, "red"],
    ["29/6",73000, "red"],
    ["30/6",77000, "red"],
];

const monLdata = [
    ["", "", { role: "style" }],
    ["January", 1230000, "red"],
    ["February",1300000 , "red"],
    ["March", 1240000, "red"],
    ["April", 1340000, "red"],
    ["May", 1550000, "red"],
    ["June", 1332000, "red"],
    ["July",1325000, "red"],
    ["August", 1460000, "red"],
    ["September", 1208000, "red"],
    ["October", 1175000, "red"],
    ["Novenmber", 1215000, "red"],
    ["December", 1130432, "red"]
];

const yearLdata = [
    ["", "", { role: "style" }],
    ["2018", 20644876, "red"],
    ["2019", 15648432, "red"],
    ["2020", 12204967, "red"],
    ["2021", 0, "red"]
];

const dayLidata = [
    ["", "", { role: "style" }],
    ["1/6", 5000, "blue"],
    ["2/6", 10000, "blue"],
    ["3/6", 30000, "blue"],
    ["4/6", 35000, "blue"],
    ["5/6", 55000, "blue"],
    ["6/6", 67000, "blue"],
    ["7/6", 63000, "blue"],
    ["8/6", 21000, "blue"],
    ["9/6", 13000, "blue"],
    ["10/6",15000, "blue"],
    ["11/6",18000, "blue"],
    ["12/6",30000 , "blue"],
    ["13/6",23000, "blue"],
    ["14/6",42000, "blue"],
    ["15/6",34000, "blue"],
    ["16/6",39000, "blue"],
    ["17/6",45000, "blue"],
    ["18/6",44000, "blue"],
    ["19/6",52000, "blue"],
    ["20/6",48000, "blue"],
    ["21/6",47000, "blue"],
    ["22/6",54000, "blue"],
    ["23/6",66000, "blue"],
    ["24/6",57000, "blue"],
    ["25/6",62000, "blue"],
    ["26/6",67000, "blue"],
    ["27/6",71000, "blue"],
    ["28/6",69000, "blue"],
    ["29/6",73000, "blue"],
    ["30/6",77000, "blue"],
];

const monLidata = [
    ["", "", { role: "style" }],
    ["January", 1230000, "blue"],
    ["February",1300000 , "blue"],
    ["March", 1240000, "blue"],
    ["April", 1340000, "blue"],
    ["May", 1550000, "blue"],
    ["June", 1332000, "blue"],
    ["July",1325000, "blue"],
    ["August", 1460000, "blue"],
    ["September", 1208000, "blue"],
    ["October", 1175000, "blue"],
    ["Novenmber", 1215000, "blue"],
    ["December", 1130432, "blue"]
];

const yearLidata = [
    ["", "", { role: "style" }],
    ["2018", 20644876, "blue"],
    ["2019", 15648432, "blue"],
    ["2020", 12204967, "blue"],
    ["2021", 0, "blue"]
];


const options = {
    is3D : true,
    legend: "none"
};

class SpecificStats extends Component{
    constructor(){
        super();
            this.state={
                year:0,
                month:'',
                monlist:['Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'],
                yearlist:[2018,2019,2020]
                
            }
    }
    render(){
        if(this.state.year === 2019){
            let listen;
            if(this.props.datatype === 'Listen'){
                listen = monLdata
            }
            else{
                listen = monLidata
            }
            return (
                <div className="chartstyle" >
                    <h1 className="SgName">Tmly maak</h1>
                    <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="700px"
                    data={listen}
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
                            this.setState({month:this.state.monlist[row]})
                            this.setState({year:0})
                            }
                        },
                        },
                    ]}
                    />
                </div>
            
            );
          }
        if(this.state.month === 'June'){
            let listen;
            if(this.props.datatype === 'Listen'){
                listen = dayLdata
            }
            else{
                listen = dayLidata
            }
            return (
                <div className="chartstyle" >
                    <h1 className="SgName">Tmly maak</h1>
                    <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="700px"
                    data={listen}
                    options={options}
                    />
                
                </div>
                
            );
        }
        else{
            let listen;
            if(this.props.datatype === 'Listen'){
                listen = yearLdata
            }
            else{
                listen = yearLidata
            }
            return(
                <div className="chartstyle" >
                    <h1 className="SgName">Tmly maak</h1>
                    <Chart
                    chartType="ColumnChart"
                    width="100%"
                    height="700px"
                    data={listen}
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
                            this.setState({year:this.state.yearlist[row]})
                            
                            
                            }
                            
                        },
                        },
                    ]}
                    />
                </div>

            )

        }
        
    }
}

export default SpecificStats;



