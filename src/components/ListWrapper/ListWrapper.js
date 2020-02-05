import React from "react";
import ListItem from "./ListItem/ListItem";
import styles from "./ListWrapper.module.scss";

const ListWrapper = ({ items }) => (
  <ul className={styles.wrapper}>
    {items.map(item => (
      <ListItem key={item.name} {...item} />
    ))}
  </ul>
);

export default ListWrapper;
