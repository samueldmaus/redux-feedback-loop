import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class Intro extends Component {
    render() {
        let today = new Date();
        let date = (today.getMonth()+1)+ '/' + today.getDate() + '/' + today.getFullYear(); 
        return (
            <div>
                <p><Link to="/feeling">CLICK HERE</Link> to leave feedback for:</p>
                <p>{date}</p>
            </div>
        )
    }
}