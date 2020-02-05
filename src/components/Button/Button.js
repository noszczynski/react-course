import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({ children, href }) => (
  <>
    {href ? (
      <a
        className={styles.button}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <button className={styles.button}>{children}</button>
    )}
  </>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
};

Button.defaultProps = {
  href: null,
  target: null
};

export default Button;
