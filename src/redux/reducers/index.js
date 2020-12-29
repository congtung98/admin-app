import { combineReducers } from 'redux';
import userReducer from './user.reducers';
import authReducer from './auth.reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
});

export default rootReducer;