import ToDoConstants from '../constants/ToDoConstants';
import { FormInitialState } from '../constants/model/FormModel.jsx'

const FormHandler = (state = FormInitialState,action) => {
  switch(action.type){
    case ToDoConstants.ToDoAddDraft:{
      return state.set('addInputText',action.text);
    }
    default:
      return state;
  }
}

export default FormHandler;
