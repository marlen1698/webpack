// Greeter.js
import styles from '../css/Greeter.css';//导入
import React, {Component} from 'react'
import config from './config.json';


class Greeter extends Component{
    render() {
        return (
            /*添加类名*/
            <div className={styles.root}>
                {config.greetText}
            </div>
        );
    }
}

export default Greeter