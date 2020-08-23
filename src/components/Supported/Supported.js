import React, {Component} from 'react';
import {connect} from 'react-redux';

class Supported extends Component{

    getRadioValue = (event) => {
        event.preventDefault();
        let supported = document.getElementsByName('supported');
        for(let i = 0; i < supported.length; i++){
            if(supported[i].checked) {
                this.props.dispatch({type:"ADD_SUPPORT", payload: supported[i].value})
            }
        }
        this.props.history.push('/understanding');
    };

    render() {
        return (
        <form onSubmit={this.getRadioValue}>

            <p>How well are you being supported?</p>
            <label htmlFor="valStart">1</label>
            <input name="supported" type="radio" id="valStart" value="1" />
            <input name="supported"  type="radio"  value="2" />
            <input name="supported"  type="radio"  value="3" />
            <input name="supported"  type="radio" value="4" />
            <input name="supported"  type="radio" id="valEnd" value="5" />
            <label htmlFor="valEnd">5</label>
            <button type="submit">Submit</button>

        </form> 
        )
    }
}

export default connect()(Supported);