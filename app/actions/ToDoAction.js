import ToDoDispatcher from '../dispatcher/ToDoDispatcher';
import ToDoConstants from '../constants/ToDoConstants';

const ToDoAction = {
  ToDoCreate: (text) => {
    ToDoDispatcher.dispatch({
      actionType:ToDoConstants.TODO_CREATE,
      props:{text:text}
    });
  },
  ToDoDelete: (props) => {
    ToDoDispatcher.dispatch({
      actionType:ToDoConstants.TODO_DESTROY,
      props:{id: props.id,checked:props.checked}
    });
  },
  ToDoUpdate: (props) => {
    ToDoDispatcher.dispatch({
      actionType:ToDoConstants.TODO_UPDATE,
      props:{id: props.id,content:props.content,checked:props.checked}
    });

  }
}

export default ToDoAction;
