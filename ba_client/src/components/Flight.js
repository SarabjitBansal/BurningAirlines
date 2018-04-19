import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import axios from 'axios';
import '../index.css';
const SERVER_URL = 'http://localhost:3333/flights.json';
//////////


class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class SeatMap extends Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {

    return (
      <div>
        <div className="status"></div>
        <div className="board-row">

          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}

        </div>
      </div>
    );
  }
}


function ShowFlight(props) {
  console.log("HEYYYY SECOND PAGE");
  // debugger;
    const s = props.details;
    return (
      <div className ="ShowFlights">
        <div className="divDisp" key={s.id}>{s.date}
          <p>{s.date}</p>
          <p>{s.flight_no}</p>
          <p>{s.origin}</p>
          <p>{s.destination}</p>
          <p>{s.airplane ? s.airplane.name : ''}</p>

          {s.airplane ? s.airplane.name : ''}

          <SeatMap flight={s.flight} airplane={s.airplane} reservations={s.reservations}/>


        </div>
      </div>
    );

  // }

}




class Flight extends Component {

  constructor(props) {
    super(props);
    let k = this.props.match.params.id
    this.state = { flightdet:{} };

    const fetchFlight = () => {
    axios.get(`http://localhost:3333/flights/${k}.json`, {
    })
    .then(function (response) {
    this.setState( { flightdet: response.data } )
  }.bind(this));

  setTimeout(fetchFlight, 4000); // Recursion



  }
  fetchFlight();
}


  render() {
    return(
      <div>
      <Link to="/"> Back to home </Link>
      <ShowFlight details={this.state.flightdet} />

      </div>

    )

  }
}

export default Flight;
