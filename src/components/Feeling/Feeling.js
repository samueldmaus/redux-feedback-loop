import React, {Component} from 'react';
import {connect} from 'react-redux'

class Feeling extends Component {
    state ={
        value: 0
    }

    getRadioValue = (event) => {
        event.preventDefault();
        let feeling = document.getElementsByName('feeling');
        for(let i = 0; i < feeling.length; i++){
            if(feeling[i].checked) {
                this.props.dispatch({type:"ADD_FEELING", payload: feeling[i].value})
            }
        }
    };

    render() {
        return (
            <form onSubmit={this.getRadioValue}>

                <p>How are you feeling today?</p>
                <label for="valStart">1</label>
                <input name="feeling" type="radio" id="valStart" value="1" />
                <input name="feeling"  type="radio"  value="2" />
                <input name="feeling"  type="radio"  value="3" />
                <input name="feeling"  type="radio" value="4" />
                <input name="feeling"  type="radio" id="valEnd" value="5" />
                <label for="valEnd">5</label>
                <button type="submit">Submit</button>
            </form> 
        )
    }
};

export default connect()(Feeling);