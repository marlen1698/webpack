// Greeter.js
import styles from '../css/Greeter.css';//����
import React, {Component} from 'react'
import config from './config.json';


class Greeter extends Component{
    render() {
        return (
            /*�������*/
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter