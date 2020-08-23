import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'; 
import logger from 'redux-logger';

const FeedbackReducer = (state = {feeling: 0, understanding: 0, supported: 0, comments:''}, action) => {
    if(action.type === "ADD_FEELING") {
        return {...state, feeling: action.payload}
    } else if(action.type === "ADD_SUPPORT") {
        return {...state, supported: action.payload}
    } else if(action.type === "ADD_UNDERSTANDING") {
        return {...state, understanding: action.payload}
    }

    return state;
}

const store = createStore (
    combineReducers({
        FeedbackReducer
    }),
    applyMiddleware(logger)
    
)
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
