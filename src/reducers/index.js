import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import eventsReducer from './events'


export default createStore(eventsReducer, composeWithDevTools(applyMiddleware(logger)))
