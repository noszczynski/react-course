import React, {Component} from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

class Button extends Component {

  static propTypes = {
    href: PropTypes.string,
    target: PropTypes.string,
    secondary: PropTypes.bool,
    onClick: PropTypes.func,
  };
  static defaultProps = {
    href: null,
    target: null,
    secondary: false,
  };

  render(){
    const {href, children, secondary, onClick: click} = this.props;
    const buttonClass = secondary ? styles.secondary : styles.primary;

    return(
        <>
          {href ? (
              <a
                  className={buttonClass}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                {children}
              </a>
          ) : (
              <button
                  className={buttonClass}
                  onClick={click}
              >
                {children}
              </button>
          )}
        </>
    )
  };

}

export default Button;
