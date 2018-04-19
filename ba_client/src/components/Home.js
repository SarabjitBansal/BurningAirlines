import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (

      <div class="container">
        <h1>Welcome to Burning Airlines</h1>

      <button id="search"><Link to="/srch">Search flights</Link></button>

    </div>
    )
  }
}

export default Home;
