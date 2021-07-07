import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

class Input extends Component {
    static propTypes = {
        tag: PropTypes.string,
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        maxLength: PropTypes.number,
        isRequired: PropTypes.bool,
        type: PropTypes.string,
    };

    static defaultProps = {
        tag: "input",
        maxLength: 256,
        isRequired: false
    };

    render() {
        const {tag: Tag, maxLength, isRequired, label, name, type} = this.props;
        return (
            <div className={styles.formItem}>
                <Tag
                    className={Tag !== "textarea" ? styles.input : styles.textarea}
                    type={type && type}
                    name={name}
                    id={name}
                    placeholder=" "
                    maxLength={maxLength}
                    required={isRequired}
                />
                <label className={styles.textLabel} htmlFor={name}>
                    {label}
                </label>
            </div>
        )
    }
}

export default Input;
