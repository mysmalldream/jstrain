import React from 'react';
//import { Link } from 'react-router';
import NavLink from './NavLink';

export default React.createClass({
  contextTypes:{
    router:React.PropTypes.object
  },

  handleSubmit(event){
    event.preventDefault();
    const boyName=event.target.elements[0].value;
    const path=`/boys/${boyName}`;
    this.context.router.push(path)
  },

  render() {
    return (
      <div>
        <h2>我的男神们：</h2>
        <ul>
          <li><NavLink to="/boys/宋仲基">宋仲基</NavLink></li>
          <li><NavLink to="/boys/吴亦凡">吴亦凡</NavLink></li>
          <li>
            <from onSubmit={this.handleSubmit}>
              <input type="text" placeholder="boyName"/>
              <button type="submit">Go</button>
            </from>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
});