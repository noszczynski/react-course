import React, {Component} from "react";
import styles from "./Radio.module.scss";
import PropTypes from "prop-types";

class Radio extends Component {

    static propTypes = {
        id: PropTypes.string,
        checked: PropTypes.bool,
        change: PropTypes.func,
    };

    render() {
        const {id, checked, change, children} = this.props;

        return (
            <label className={styles.radio} htmlFor={id}>
                <input
                    type="radio"
                    id={id}
                    onChange={() => change()}
                    checked={checked}
                />
                <div className={styles.radioButton}></div>
                {children}
            </label>
        );
    }
}

export default Radio;