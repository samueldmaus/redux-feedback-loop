import React, {Component} from 'react';
import {connect} from 'react-redux';

class Comments extends Component {
    state = {
        comments: ''
    };

    handleChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({type:"ADD_COMMENTS", payload: this.state.comments})
        this.setState({
            comments:''
        })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Any comments you want to leave?</p>
                <input placeholder="Comments" onChange={this.handleChange} value={this.state.comments}/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default connect()(Comments)