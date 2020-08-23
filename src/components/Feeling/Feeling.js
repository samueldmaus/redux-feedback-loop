import React, {Component} from 'react';
import {connect} from 'react-redux'

class Feeling extends Component {

    getRadioValue = (event) => {
        event.preventDefault();
        let hasChecked = false;
        let feeling = document.getElementsByName('feeling');
        for(let i = 0; i < feeling.length; i++){
            if(feeling[i].checked) {
                hasChecked = true;
                this.props.dispatch({type:"ADD_FEELING", payload: feeling[i].value});
                this.props.history.push('/supported');
            }
        }
        if(hasChecked === false) {
            alert('Please select a feeling value')
        }
    }


    render() {
        return (
            <form onSubmit={this.getRadioValue}>

                <p>How are you feeling today?</p>
                <label htmlFor="valStart">1</label>
                <input name="feeling" type="radio" id="valStart" value="1" />
                <input name="feeling"  type="radio"  value="2" />
                <input name="feeling"  type="radio"  value="3" />
                <input name="feeling"  type="radio" value="4" />
                <input name="feeling"  type="radio" id="valEnd" value="5" />
                <label htmlFor="valEnd">5</label>
                <button type="submit">Next</button>
            </form> 
        )
    }
};

export default connect()(Feeling);