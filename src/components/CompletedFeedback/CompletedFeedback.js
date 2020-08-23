import React, {Component} from 'react';
import {connect} from 'react-redux'

export default connect()(class CompletedFeedback extends Component {

    resetFeedback = (event) => {
        event.preventDefault();
        this.props.dispatch({type:"NEW_FEEDBACK"});
        this.props.history.push('/');
    }

    render() {
        return (
            <form onSubmit={this.resetFeedback}>
                <h2>Thank You!</h2>
                <button type="submit">Leave New Feedback</button>
            </form>
        )
    }
})