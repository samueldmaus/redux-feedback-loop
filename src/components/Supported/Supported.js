import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';

class Supported extends Component{

    getRadioValue = (event) => {
        event.preventDefault();
        let hasChecked = false;
        let supported = document.getElementsByName('supported');
        for(let i = 0; i < supported.length; i++){
            if(supported[i].checked) {
                hasChecked = true;
                this.props.dispatch({type:"ADD_SUPPORT", payload: supported[i].value});
                this.props.history.push('/understanding');
            }
        }
        if(hasChecked === false) {
            alert('Please select a supported level')
        }
    };

    render() {
        return (
        <form onSubmit={this.getRadioValue}>

            <p>How well are you being supported?</p>
            <Box display="flex" justifyContent="center">
                <RadioGroup className='radioButtons' row  name="supported" >

                    <FormControlLabel value='1' control={<Radio/>} label="1" labelPlacement="bottom"/>
                    <FormControlLabel value='2' control={<Radio/>} label="2" labelPlacement="bottom"/>
                    <FormControlLabel value='3' control={<Radio/>} label="3" labelPlacement="bottom"/>
                    <FormControlLabel value='4' control={<Radio/>} label="4" labelPlacement="bottom"/>
                    <FormControlLabel value='5' control={<Radio/>} label="5" labelPlacement="bottom"/>

                </RadioGroup>
                </Box>
            <br/>
            <button onClick={()=>this.props.history.goBack()}>Back</button>
            <button type="submit">Next</button>

        </form> 
        )
    }
}

export default connect()(Supported);