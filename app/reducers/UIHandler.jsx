import ToDoConstants from '../constants/ToDoConstants';
import { UIInitialState } from '../constants/model/UIModel.jsx'

const UIHandler = (state = UIInitialState,action) => {
  switch(action.type){
    case ToDoConstants.ToDoAddDraft:{
      return state.set('addInputText',action.text);
    }
    default:
      return state;
  }
}

export default UIHandler;
