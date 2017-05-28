import ToDoConstants from '../constants/ToDoConstants';
import { List } from 'immutable';
import { ToDo } from '../constants/model/ToDoModel.jsx'


const ToDoItems = (state = List([]),action) => {
  switch(action.type){
    case ToDoConstants.ToDoCreate:{
      const id = Number(sessionStorage.id);
      sessionStorage.setItem('id',id+1);
      return state.push(ToDo.merge({
        id:id,
        text: action.text
      }));
    }
    case ToDoConstants.ToDoDelete:{
      return state.filter((ToDo)=>(ToDo.get('id')!==action.id));
    }
    default:
      return state;
  }
}


export default ToDoItems;
