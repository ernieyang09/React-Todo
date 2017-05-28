import ToDoItems from './ToDoItems.jsx';
import FormHandler from './Handler.jsx';
import { combineReducers } from 'redux-immutable';

const Reducers = combineReducers({
  ToDoItems,
  FormHandler
})

export default Reducers;
