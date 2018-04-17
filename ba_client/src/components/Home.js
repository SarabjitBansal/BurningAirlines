import React, { PureComponent as Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>This is the homepage</h2>
        <p>
          Search <Link to="/srch">for flights</Link>
        </p>
      </div>
    )
  }
}

export default Home;
