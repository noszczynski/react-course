import React, { Component } from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./ListWrapper.module.scss";
import Title from "../Title/Title";
import Button from "../Button/Button";
import AppContext from "../../context";
import PropTypes from "prop-types";

class ListWrapper extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  render() {
    const { items } = this.props;

    return (
      <>
        {items.length ? (
          <ul className={styles.wrapper}>
            {items.map(item => (
              <ListItem key={item.name} {...item} />
            ))}
          </ul>
        ) : (
          <AppContext.Consumer>
            {context => (
              <div className={styles.wrapper}>
                <Title>There is no items. Add something...</Title>
                <Button secondary onClick={context.openModal}>
                  Add item
                </Button>
              </div>
            )}
          </AppContext.Consumer>
        )}
      </>
    );
  }
}

export default ListWrapper;
