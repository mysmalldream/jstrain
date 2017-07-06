import React from 'react';
//import {Link} from 'react-router';
import NavLink from './NavLink';
//import Home from './Home'


export default React.createClass({
  render() {
    return (
      <div>
        <h1>明星特区</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/boys">男神</NavLink></li>
          <li><NavLink to="/girls">女神</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});
