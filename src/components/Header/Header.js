import React, { Component } from "react";
import styles from './Header.module.scss'
import Navigation from "./Navigation/Navigation";
import logo from './../../assets/images/FavNote.svg';
import Button from "../Button/Button";

class Header extends Component {
    render() {
        return (
            <header className={styles.wrapper}>
                <img src={logo} alt={`FavNote logo`} className={styles.logo}/>
                <Navigation />
                <Button secondary>new item</Button>
            </header>
        )
    }
}

export default Header;
