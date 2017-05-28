import ToDoItems from './ToDoItems.jsx';
import UIHandler from './UIHandler.jsx';
import { combineReducers } from 'redux-immutable';

const Reducers = combineReducers({
  ToDoItems,
  UIHandler
})

export default Reducers;
