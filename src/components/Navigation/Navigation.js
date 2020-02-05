import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Twitters</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/notes">Notes</Link>
        </li>
      </ul>
    );
  }
}

export default Navigation;
