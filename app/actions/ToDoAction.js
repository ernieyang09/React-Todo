import ToDoDispatcher from '../dispatcher/ToDoDispatcher';
import ToDoConstants from '../constants/ToDoConstants';

const ToDoAction = {
  ToDoCreate: function(text){
    ToDoDispatcher.dispatch({
      actionType:ToDoConstants.TODO_CREATE,
      text:text
    });
  }
}

export default ToDoAction;
