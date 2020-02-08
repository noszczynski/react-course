import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from './Navigation.module.scss'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul className={styles.wrapper}>
          <li className={styles.navItem}>
            <NavLink
                activeClassName={styles.navLinkActive}
                className={styles.navLink}
                to="/"
                exact
            >
              twitters
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
                activeClassName={styles.navLinkActive}
                className={styles.navLink}
                to="/articles"
            >
              articles
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
                activeClassName={styles.navLinkActive}
                className={styles.navLink}
                to="/notes"
            >
              notes
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
