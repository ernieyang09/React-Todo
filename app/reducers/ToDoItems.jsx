import ToDoConstants from '../constants/ToDoConstants';

const ToDoItems = (state = [],action) => {
  switch(action.type){
    case ToDoConstants.ToDoCreate:{
      const id = Number(sessionStorage.id);
      sessionStorage.setItem('id',id+1);
      return [...state,{
        id:id,
        text: action.text
      }]
    }
    default:
      return state;
  }
}


export default ToDoItems;
