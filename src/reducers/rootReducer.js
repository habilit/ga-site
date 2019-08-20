import { combineReducers } from 'redux';
import simpleReducer from './simpleReducer';
import todos from './todosReducer';
import contacts from './contactsReducer';
export default combineReducers({
    simpleReducer,
    todos,
    contacts,
});
