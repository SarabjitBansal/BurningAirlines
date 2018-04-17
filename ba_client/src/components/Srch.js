
import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from 'react-native';
import '../index.css';

class SearchForm extends Component {
  render(){
    return(
      <form>
        <h4>Burning Airlines</h4>


        <input type ="text" placeholder="From" />
        <input type ="text" placeholder="to" />
        <button  className = "square" >Search</button>
      </form>
    );
  }

}

class Srch extends Component {
  render() {
    return (
      <div>
        <Link to="/">Back to home</Link>
        <SearchForm />

      </div>
    )
  }
}

export default Srch;
