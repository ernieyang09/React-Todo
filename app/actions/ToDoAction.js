import ToDoDispatcher from '../dispatcher/ToDoDispatcher';
import ToDoConstants from '../constants/ToDoConstants';

const ToDoActions = {
  ToDoCreate: function(text){
    ToDoDispatcher.dispatchEvent({
      actionType:ToDoConstants.TODO_CREATE,
      text:text
    });
  }
}
