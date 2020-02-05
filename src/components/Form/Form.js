import React from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";

const Form = ({ submitFn }) => (
  <div className={styles.wrapper}>
    <Title>Add new twitter account</Title>
    <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
      <Input name="name" maxLength={30} isRequired={true} label="Name" />
      <Input name="link" isRequired={true} label="Link" />
      <Input name="image" label="Image" />
      <Input
        tag="textarea"
        name="description"
        isRequired={true}
        label="Description"
      />
      <Button type="submit">add new item</Button>
    </form>
  </div>
);

export default Form;
