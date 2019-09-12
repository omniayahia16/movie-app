import React from 'react';
import About from './About';
import {Link , NavLink} from 'react-router-dom';

const Nav =()=> {
    return (
      <div>
        <NavLink exact activeClassName="selected" to="/">home </NavLink>
        <NavLink activeClassName="selected" to="/about" component={About}> about</NavLink>
      </div>
    )
  }
export default Nav;