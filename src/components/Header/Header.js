import React, { Component } from "react";
import styles from './Header.module.scss'
import Navigation from "./Navigation/Navigation";
import logo from './../../assets/images/FavNote.svg';
import Button from "../Button/Button";
import PropTypes from "prop-types";

class Header extends Component {
    static propTypes = {
        openModalFn: PropTypes.func,
    };

    render() {
        const {openModalFn} = this.props;

        return (
            <header className={styles.wrapper}>
                <img src={logo} alt={`FavNote logo`} className={styles.logo}/>
                <Navigation />
                <Button secondary onClick={openModalFn}>new item</Button>
            </header>
        )
    }
}

export default Header;
