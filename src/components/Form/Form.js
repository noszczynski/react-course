import React, {Component} from "react";
import styles from "./Form.module.scss";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Title from "../Title/Title";
import PropTypes from "prop-types";
import Radio from "../Radio/Radio";

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
                <Title className={styles.title}>{descriptions[activeOption]}</Title>
                <form autoComplete="off" className={styles.form} onSubmit={submitFn}>
                    <div className={styles.checkboxWrapper}>
                        <Radio
                            id={types.twitter}
                            change={() => this.handleTypeChange(types.twitter)}
                            checked={activeOption === types.twitter}
                        >
                            Twitter
                        </Radio>
                        <Radio
                            id={types.article}
                            change={() => this.handleTypeChange(types.article)}
                            checked={activeOption === types.article}
                        >
                            Article
                        </Radio>
                        <Radio
                            id={types.note}
                            change={() => this.handleTypeChange(types.note)}
                            checked={activeOption === types.note}
                        >
                            Note
                        </Radio>
                    </div>
                    <Input type="text" name="name" maxLength={30} isRequired={true} label={activeOption === types.twitter ? 'Twitter Name' : 'Title'}/>
                    {activeOption === types.note ? null : (
                            <Input type="text" name="link" isRequired={true} label="Link"/>
                        )
                    }
                    {activeOption === types.twitter ? (
                            <Input type="text" name="image" label="Image"/>
                        ) : null
                    }
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
