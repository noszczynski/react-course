import React, {Component} from "react";
import styles from "./Modal.module.scss";
import Form from "../Form/Form";

class Modal extends Component {
    static propTypes ={

    };

    render() {
        return (
            <div className={styles.wrapper}>
                <Form />
            </div>
        )
    };

}

export default Modal;