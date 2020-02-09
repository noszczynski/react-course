import React, {Component} from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import PropTypes from "prop-types";

const types = {
    twitter: 'twitter',
    article: 'article',
    note: 'note',
};

const descriptions = {
    twitter: 'Add new favorite Twitter account',
    article: 'Add new awesome Article',
    note: 'Let\'s share Note with us',
};

class Form extends Component {
    static propTypes = {
        submitFn: PropTypes.func,
    };

    state = {
        activeOption: types.twitter,
    };

    handleTypeChange = type => {
        this.setState({activeOption: type});
    };

    render() {
        const {submitFn} = this.props;
        const {activeOption} = this.state;

        return (
            <div className={styles.wrapper}>
                <Title>{descriptions[activeOption]}</Title>
                <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
                    <div className={styles.checkboxWrapper}>
                        <input
                            type="radio"
                            id={types.twitter}
                            onChange={() => this.handleTypeChange(types.twitter)}
                            checked={activeOption === types.twitter}
                        />
                        <label className={styles.radioLabel} htmlFor={types.twitter}>Twitter</label>
                        <input
                            type="radio"
                            id={types.article}
                            onChange={() => this.handleTypeChange(types.article)}
                            checked={activeOption === types.article}
                        />
                        <label className={styles.radioLabel} htmlFor={types.article}>Article</label>
                        <input
                            type="radio"
                            id={types.note}
                            onChange={() => this.handleTypeChange(types.note)}
                            checked={activeOption === types.note}
                        />
                        <label className={styles.radioLabel} htmlFor={types.note}>Note</label>
                    </div>
                    <Input type="text" name="name" maxLength={30} isRequired={true} label="Name"/>
                    <Input type="text" name="link" isRequired={true} label="Link"/>
                    <Input type="text" name="image" label="Image"/>
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
    }
}

export default Form;
