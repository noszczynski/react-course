import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ tag: Tag, name, label, maxLength, isRequired }) => (
  <div className={styles.formItem}>
    <Tag
      className={Tag !== "textarea" ? styles.input : styles.textarea}
      type={Tag !== "textarea" ? null : "textarea"}
      name={name}
      id={name}
      placeholder=" "
      maxLength={maxLength}
      required={isRequired}
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  isRequired: PropTypes.bool
};

Input.defaultProps = {
  tag: "input",
  maxLength: 256,
  isRequired: false
};

export default Input;
