
import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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


class ShowFlights extends Component {

  render() {
    return("Show flights");
  }
}


class Srch extends Component {
  saveFlight(s) {
    console.log(s);
  }
  // saveFlight(s) {
  // axios.post(SERVER_URL, {content: s}).then((results) => {
  //   this.setState( { secrets: [results.data, ...this.state.secrets] } ); // Spread operator
  // });
// }


  render() {
    return (
      <div>
        <Link to="/">Back to home</Link>
        <SearchForm onSubmit={this.saveFlight} />
        <ShowFlights />
      </div>
    )
  }
}

export default Srch;
