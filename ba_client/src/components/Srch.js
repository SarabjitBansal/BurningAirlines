
import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
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
    <form onSubmit={this._handleSubmit}>
    <label>Burning Airlines</label>
    <input type ="text" placeholder="From" onChange={this._handleChange1} />
    <input type ="text" placeholder="to" onChange={this._handleChange2}/>
    <input type="submit" value="Search"  className = "square" />
    </form>
    );
  }

}

function ShowFlights(props) {
  console.log(props);
  return (
    <div className ="ShowFlights">
      { props.details.flights.map( s =>

        <div className="divDisp" key={s.id}>{s.date}
        <p>{s.date}</p>
          <p>{s.flight_no}</p>

          <p>{s.origin}</p>
          <p>{s.destination}</p>
          <p>{s.airplane.name}</p>
        </div>
      ) }
    </div>
  );
}




class Srch extends Component {

  constructor(props) {
    super(props);
    this.state = { flights:[], airplanes:[] };
    // this.state = { flights : { date:'', flight_no:'',origin:'',destination:'',airplane_id: 0 } };
    this.saveFlight = this.saveFlight.bind(this);

  // Polling
    // const fetchFlights = () => { // Fat arrow functions do not break the connection to this.
    //   axios.get(SERVER_URL).then( results => this.setState( { flights: results.data } ) );
    //   // setTimeout(fetchFlights, 4000); // Recursion
    // }
// fetchFlights();
    // fetchFlights();
  }
//Flights - from and to - params\


saveFlight(s) {
  console.log(s.fromD);
  console.log(s.toD);
  // axios.get(SERVER_URL).then((results) => this.setState( { flights: results.data } ) );
  // axios.get(SERVER_URL).then((results) => this.setState( { flights: results.data } ) );
  axios.get(SERVER_URL).then((results) =>



  this.setState( { flights: results.data } ) );




////




//

}
// original

//   saveFlight(s) {
//
//
//       axios.get(SERVER_URL, {origin: s.fromD, destination: s.toD }).then((results) => {
//       console.log(results);
//       this.setState( { flights: [results.data, ...this.state.flights] } ); // Spread operator
//       this.fetchFlights();
//
//   });
//
// }


  render() {
    return (
      <div>
        <Link to="/">Back to home</Link>
        <SearchForm onSubmit={this.saveFlight} />
        <ShowFlights details={this.state} />
      </div>
    )
  }
}

export default Srch;
