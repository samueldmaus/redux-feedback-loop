import React, {Component} from 'react';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

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
        });
        this.props.history.push('/review');
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <p>Any comments you want to leave?</p>
                <Box m={1}>
                    <TextField multiline label="Comments" value={this.state.comments} onChange={this.handleChange} />
                </Box>
                <br />
                <button onClick={()=>this.props.history.goBack()}>Back</button>
                <button type="submit">Next</button>
            </form>
        )
    }
}

export default connect()(Comments)