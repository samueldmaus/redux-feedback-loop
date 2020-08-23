import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Review extends Component{

    submitFeedback = (event) => {
        event.preventDefault();
        axios.post('/feedback', this.props.reduxState.FeedbackReducer)
        .then(response => {
            this.props.history.push('/completed')
        }).catch(error => {
            console.log('error in POST:', error)
        })
    }

    render() {
        return (
            <form onSubmit={this.submitFeedback}>
                <h2>Rview Your Feedback</h2>
                <p>Feeling: {this.props.reduxState.FeedbackReducer.feeling}</p>
                <p>Support: {this.props.reduxState.FeedbackReducer.supported}</p>
                <p>Understanding: {this.props.reduxState.FeedbackReducer.understanding}</p>
                <p>Comments: {this.props.reduxState.FeedbackReducer.comments}</p>
                <button type="submit">Submit Feedback</button>
            </form>
        )
    }
};

const mapPropsToState = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapPropsToState)(Review);