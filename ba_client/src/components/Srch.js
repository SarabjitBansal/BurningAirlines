import React, { PureComponent as Component } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../index.css';
const SERVER_URL = 'http://localhost:3333/flights.json';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { fromD: '' , toD:''};
    this._handleChange1= this._handleChange1.bind(this);
    this._handleChange2= this._handleChange2.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange1(e){
    this.setState( { fromD: e.target.value } );
  }
  _handleChange2(e){
    this.setState( { toD: e.target.value } );
  }
  _handleSubmit(e){
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({fromD: '', toD:''});
  }
  render(){
    return(
  <div className="searchForm">
    <form onSubmit={this._handleSubmit}>
    <label>Burning Airlines</label>
    <br/>
    <input type ="text" placeholder="From" onChange={this._handleChange1} />
    <input type ="text" placeholder="to" onChange={this._handleChange2}/>
    <input type="submit" value="Search"  className = "square" />
    </form>
  </div>
    );
  }

}

function ShowFlights(props) {
  return (
    <div className ="ShowFlights">

    { props.details.flights.map( s =>
      <div className="divDisp" key={s.id}>

        <p>{s.date}</p>
        <Link
          to={{
          pathname: `/flight/${s.id}`
          }}><p>{s.flight_no}</p>
        </Link>
        <p>{s.origin}</p>
        <p>{s.destination}</p>
        <p>{s.airplane.name}</p>
      </div>
    )}
    </div>
  );
}




class Srch extends Component {
  constructor(props) {
    super(props);
    this.state = { flights:[], airplanes:[] };
    this.saveFlight = this.saveFlight.bind(this);
  }
  saveFlight(s) {
    axios.get(SERVER_URL).then(function(results) {
      let arr = results.data;
      let newresult=[];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].origin === s.fromD  &&  arr[i].destination === s.toD ){
          newresult.push(arr[i]);
        }
      }
      this.setState( { flights: newresult } )
    }.bind(this))
  }

  render() {
    return (
      <div>
        <Link to="/" className="link">Home</Link>
        <SearchForm onSubmit={this.saveFlight} />
        <ShowFlights details={this.state} />
      </div>
    )
  }
}

export default Srch;
