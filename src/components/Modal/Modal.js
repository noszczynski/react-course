import React, {Component} from "react";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";
import PropTypes from "prop-types";

class Modal extends Component {
    static propTypes ={
        closeModalFn: PropTypes.func,
    };

    render() {
        const {closeModalFn: close} = this.props;

        return (
            <div className={styles.wrapper}>
                <button onClick={close} className={styles.close}>x</button>
                <Form />
            </div>
        )
    };

}

export default Modal;