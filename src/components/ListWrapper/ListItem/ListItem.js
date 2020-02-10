import React from "react";
import PropTypes from "prop-types";
import styles from "./ListItem.module.scss";
import Button from "../../Button/Button";
import Title from "../../Title/Title";
import AppContext from "../../../context";

const ListItem = ({ image, title, description, link }) => {
  return (
    <AppContext.Consumer>
      {context => (
        <li className={styles.wrapper}>
          {image ? (
            <img src={image} className={styles.image} alt={title} />
          ) : (
            context && <div className={styles.imageNone}></div>
          )}
          <div>
            <Title className={styles.itemName}>{title}</Title>
            <p className={styles.itemDescription}>{description}</p>
            {link && (
              <Button href={link} target="_blank">
                visit twitter page
              </Button>
            )}
          </div>
        </li>
      )}
    </AppContext.Consumer>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string,
  image: PropTypes.string
};

ListItem.defaultProps = {
  link: null,
  image: null
};

export default ListItem;
