import ToDoConstants from '../constants/ToDoConstants';
import { List } from 'immutable';
import  { ToDo } from '../constants/model/ToDoModel.jsx'

const ToDoItems = (state = new List() ,action) => {
  switch(action.type){
    case ToDoConstants.ToDoCreate:{
      return state.push(ToDo.merge({
        id:action.id,
        text: action.text
      }));
    }
    case ToDoConstants.ToDoToggleComplete:{
      return state.update(
        state.findIndex(function(item) {
          return item.get("id") === action.id;
        }), function(item) {
          return item.set("isComplete", !item.get("isComplete"));
        }
      );
    }
    case ToDoConstants.ToDoUpdate:{
      return state.update(
        state.findIndex(function(item) {
          return item.get("id") === action.id;
        }), function(item) {
          return item.set("text", action.text);
        }
      );
    }
    case ToDoConstants.ToDoDelete:{
      return state.filter((ToDo)=>(ToDo.get('id')!==action.id));
    }
    default:
      return state;
  }
}


export default ToDoItems;
