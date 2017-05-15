import ToDoDispatcher from '../dispatcher/ToDoDispatcher';
import ToDoAction from '../actions/ToDoAction';
import ToDoConstants from '../constants/ToDoConstants';
import {EventEmitter} from 'events';

const CHANGE = 'change';

let temp_id = 0;

const _ToDoStore = {
  ToDos:[],
  ToDoTotal:0,
  DoneCount:0
}

//state change用
class ToDoStoreClass extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE, callback);
  }
  getTodos() {
    return _ToDoStore;
  }
}

const ToDoStore = new ToDoStoreClass();

//for action用
ToDoDispatcher.register((action)=>{
  const {actionType,props} = action;
  switch(actionType){
    case ToDoConstants.TODO_CREATE:
    {
      _ToDoStore.ToDoTotal +=1;
      temp_id +=1;
      _ToDoStore.ToDos.push({
        id:temp_id,
        content:props.text,
        checked:false,
        edit:false
      });
      ToDoStore.emit(CHANGE);
    }
      break;

    case ToDoConstants.TODO_DESTROY:
    {
      _ToDoStore.ToDos = _ToDoStore.ToDos.filter((ToDo)=> ToDo.id !== props.id);
      _ToDoStore.ToDoTotal -= 1;
      _ToDoStore.DoneCount = (props.checked)?_ToDoStore.DoneCount-1:_ToDoStore.DoneCount;
      ToDoStore.emit(CHANGE);
    }
      break;

    case ToDoConstants.TODO_UPDATE:
    {
      let ToDo = _ToDoStore.ToDos.filter((ToDo)=> ToDo.id === props.id)[0];
      ToDo.content = props.content;

      if(ToDo.checked != props.checked){
        ToDo.checked = props.checked;
        _ToDoStore.DoneCount = (props.checked)?_ToDoStore.DoneCount+1:_ToDoStore.DoneCount-1;
      }

      ToDo.edit = false;

      ToDoStore.emit(CHANGE);
    }
      break;
    case ToDoConstants.TODO_TOGGLEEDIT:
    {
      let ToDo = _ToDoStore.ToDos.filter((ToDo)=> ToDo.id === props.id)[0];
      ToDo.edit = props.edit;
      ToDoStore.emit(CHANGE);
    }
      break;
    default:
      return true;
  }
});

export default ToDoStore;