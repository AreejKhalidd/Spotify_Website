import React ,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './StatsTable.css'
import Statistics from './Statistics'



const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


/**
 * StatsTable class fetch the songs and there statistics and display them in a table
 */
export default class StatsTable extends Component{
    constructor(){
        super();
            this.state={
                row:[
                  {
                    name:'Tamaly Ma3ak',
                    listeners:50987453,
                    likes:12476598
                  },
                  {
                    name:'Nour 3eny',
                    listeners:41987453,
                    likes:9476598
                  }
              ]
                
            };
      }
    //   componentDidMount(){
        // fetch("http://127.0.0.1:8080/Amrdiabstats.json")
        // .then((response) => response.json())
        // .then((songs) => this.setState({ row: songs }));
    //   }

    render(){
      return (
        <SimpleTable Songs={this.state.row}/>
      )
    }      
}


/**
 * SimpleTable function displays data in a form of table that allow user when click to go to the stats page of the specified song 
 * @param { takes array contains objects each object has song name ,its listeners and its likes} param0 
 */


const SimpleTable = ({Songs}) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Song Name</TableCell>
            <TableCell align="right">listeners</TableCell>
            <TableCell align="right">Likes</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {Songs.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <a href='/statistics' >{row.name}</a>
              </TableCell>
              <TableCell align="right">{row.listeners}</TableCell>
              <TableCell align="right">{row.likes}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
