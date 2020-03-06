import { combineReducers } from 'redux';
import authreducer from './authreducer';
import homereducer from './homereducer'

export default combineReducers ({
    auth : authreducer,
    home : homereducer
})