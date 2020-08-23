import React, {Component} from 'react';
import {connect} from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Box from '@material-ui/core/Box';
import './Feeling.css'

export default connect()(class Feeling extends Component {

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
                <Box display="flex" justifyContent="center">
                <RadioGroup className='radioButtons' row  name="feeling" >

                    <FormControlLabel value='1' control={<Radio/>} label="1" labelPlacement="bottom"/>
                    <FormControlLabel value='2' control={<Radio/>} label="2" labelPlacement="bottom"/>
                    <FormControlLabel value='3' control={<Radio/>} label="3" labelPlacement="bottom"/>
                    <FormControlLabel value='4' control={<Radio/>} label="4" labelPlacement="bottom"/>
                    <FormControlLabel value='5' control={<Radio/>} label="5" labelPlacement="bottom"/>

                </RadioGroup>
                </Box>

                <button type="submit">Next</button>
            </form> 
        )
    }
});

