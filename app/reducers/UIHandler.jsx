import ToDoConstants from '../constants/ToDoConstants';
import { UIInitialState } from '../constants/model/UIModel.jsx'

const UIHandler = (state = UIInitialState,action) => {
  switch(action.type){
    case ToDoConstants.ToDoAddDraft:{
      return state.set('addInputText',action.text);
    }
    case ToDoConstants.ToDoEditDraft:{
      return state.set('editInputText',action.text);
    }
    case ToDoConstants.ToDoEditMode: {
      return state.set('isEdit',action.id).set('editInputText',action.text);
    }
    default:
      return state;
  }
}

export default UIHandler;
