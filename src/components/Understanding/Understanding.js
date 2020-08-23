import React, {Component} from 'react';
import {connect} from 'react-redux'

class Understanding extends Component{

    getRadioValue = (event) => {
        event.preventDefault();
        let hasChecked = false;
        let understanding = document.getElementsByName('understanding');
        for(let i = 0; i < understanding.length; i++){
            if(understanding[i].checked) {
                hasChecked = true;
                this.props.dispatch({type:"ADD_UNDERSTANDING", payload: understanding[i].value});
                this.props.history.push('/comments')
            }
        }
        if(hasChecked === false) {
            alert('Please select an understanding level');
        }
    };

    render(){
        return(

        <form onSubmit={this.getRadioValue}>

            <p>How well are you understanding the content?</p>
            <label htmlFor="valStart">1</label>
            <input name="understanding" type="radio" id="valStart" value="1" />
            <input name="understanding"  type="radio"  value="2" />
            <input name="understanding"  type="radio"  value="3" />
            <input name="understanding"  type="radio" value="4" />
            <input name="understanding"  type="radio" id="valEnd" value="5" />
            <label htmlFor="valEnd">5</label>
            <br/>
            <button onClick={()=>this.props.history.goBack()}>Back</button>
            <button type="submit">Next</button>
        </form>

        )
    }
}

export default connect()(Understanding);