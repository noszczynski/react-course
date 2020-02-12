import React, { Component } from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import PropTypes from "prop-types";
import Radio from "../Radio/Radio";
import AppContext from "../../../src/context";

const types = {
  twitter: "twitter",
  article: "article",
  note: "note"
};

const descriptions = {
  twitter: "Add new favorite Twitter account",
  article: "Add new awesome Article",
  note: "Let's share Note with us"
};

class Form extends Component {
  static propTypes = {
    submitFn: PropTypes.func
  };

  state = {
    type: types.twitter,
    title: "",
    link: "",
    image: "",
    description: ""
  };

  handleTypeChange = type => {
    this.setState({ type: type });
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { type } = this.state;

    return (
      <AppContext.Consumer>
        {context => (
          <div className={styles.wrapper}>
            <Title className={styles.title}>{descriptions[type]}</Title>
            <form
              autoComplete="off"
              className={styles.form}
              onSubmit={e => context.addItem(e, this.state)}
            >
              <div className={styles.checkboxWrapper}>
                <Radio
                  id={types.twitter}
                  change={() => this.handleTypeChange(types.twitter)}
                  checked={type === types.twitter}
                >
                  Twitter
                </Radio>
                <Radio
                  id={types.article}
                  change={() => this.handleTypeChange(types.article)}
                  checked={type === types.article}
                >
                  Article
                </Radio>
                <Radio
                  id={types.note}
                  change={() => this.handleTypeChange(types.note)}
                  checked={type === types.note}
                >
                  Note
                </Radio>
              </div>
              <Input
                onChange={this.handleInputChange}
                value={this.state.title}
                type="text"
                name="title"
                isRequired={true}
                label={type === types.twitter ? "Twitter Name" : "Title"}
              />
              {type === types.note ? null : (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.link}
                  type="text"
                  name="link"
                  isRequired={true}
                  label="Link"
                />
              )}
              {type === types.twitter ? (
                <Input
                  onChange={this.handleInputChange}
                  value={this.state.image}
                  type="text"
                  name="image"
                  label="Image"
                />
              ) : null}
              <Input
                onChange={this.handleInputChange}
                value={this.state.description}
                tag="textarea"
                name="description"
                isRequired={true}
                label="Description"
              />
              <Button type="submit">add new item</Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
