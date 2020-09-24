import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import loginReducer from './loginReducer';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    login: loginReducer,
    todos: todosReducer
})

export default rootReducer;