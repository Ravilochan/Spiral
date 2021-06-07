import {combineReducers} from 'redux';
import eventReducer from '../../features/events/eventReducer';
import modalReducer from '../common/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asyncReducer from '../async/asyncReducer';

const rootReducer = combineReducers({
    event: eventReducer,
    modals: modalReducer,
    auth: authReducer,
    async: asyncReducer
})

export default rootReducer;