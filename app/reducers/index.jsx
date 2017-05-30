import ToDoItems from './ToDoItems.jsx';
import UIHandler from './UIHandler.jsx';
import ShowMode from './ShowMode.jsx';
import { combineReducers } from 'redux-immutable';

const Reducers = combineReducers({
  ToDoItems,
  UIHandler,
  ShowMode
})

export default Reducers;
