
import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'react-native';
import '../index.css';

class SearchForm extends Component {
  render(){
    return(
    <form>
    <label>Burning Airlines</label>
    <input type ="text" placeholder="From" />
    <input type ="text" placeholder="to" />
    <input type="submit" value="Search"  className = "square" />
    </form>
    );
  }

}


class ShowFlights extends Component {

  render() {
    return("flights"
    );
  }
}


class Srch extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back to home</Link>
        <SearchForm />
        <ShowFlights />
      </div>
    )
  }
}

export default Srch;
