import ToDoConstants from '../constants/ToDoConstants';
import { ToDo } from '../constants/model/ToDoModel.jsx'

export const changeText = (payload: {text:string}) => ({
      type:ToDoConstants.ToDoAddDraft,
      text:payload.text
});

export const changeEditText = (payload: {text:string}) => ({
      type:ToDoConstants.ToDoEditDraft,
      text:payload.text
});


export const EditMode = (payload: {id:number}) =>{
    return  (payload.id===null)?
            EditModeM(ToDo)
      :
      (dispatch,getstate) => {
            const state = getstate();
            dispatch(EditModeM(state.getIn(['ToDoItems',payload.id])))
      }
}


// export const EditModeM = (ToDo) =>({
//       type:ToDoConstants.ToDoEditMode,
//       id:ToDo.get('id'),
//       text:ToDo.get('text')
// })


export const EditModeM = (ToDo) => {
  return {
      type:ToDoConstants.ToDoEditMode,
      id:ToDo.get('id'),
      text:ToDo.get('text')
  }
}
