import ToDoDispatcher from '../dispatcher/ToDoDispatcher';
import ToDoAction from '../actions/ToDoAction';
import ToDoConstants from '../constants/ToDoConstants';
import {EventEmitter} from 'events';

const CHANGE = 'change';

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
  switch(action.actionType){
    case ToDoConstants.TODO_CREATE:
      _ToDoStore.ToDoCount +=1;
      break;
    default:
      return true;
  }
});

export default ToDoStore;
