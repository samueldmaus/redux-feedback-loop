import React, {Component} from 'react';
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import DeleteIcon from '@material-ui/icons/Delete';

export default class Admin extends Component{
    state = {
        feedbacks: []
    };

    componentDidMount() {
        this.getFeedback();
    };

    getFeedback = () => {
        axios.get('/feedback')
        .then(response => {
            this.setState({
                feedbacks: response.data
            })
        }).catch(error => {
            console.log('error in GET:', error)
        })
    };

    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Flag</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.feedbacks.map(feedback => (
                        <tr key={feedback.id}>
                            <td>{feedback.feeling}</td>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                            <td><IconButton><FlagIcon fontSize='large' /></IconButton></td>
                            <td><IconButton><DeleteIcon fontSize='large' /></IconButton></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

