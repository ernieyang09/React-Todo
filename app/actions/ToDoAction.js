import ToDoConstants from '../constants/ToDoConstants';
import {EditMode} from '../actions/UIActions';




export const createTodo = () => {
  return (dispatch,getstate) => {
    const state = getstate();
    dispatch(createTodoM(state.getIn(['UIHandler','addInputText'])))
  }
}

export const createTodoM = (text) => {
  const id = Number(sessionStorage.id);
  sessionStorage.setItem('id',id+1);
  return {
    type:ToDoConstants.ToDoCreate,
    id:id,
    text:text
  }
}

export const ToggleComplete = (id:number) => ({
  type:ToDoConstants.ToDoToggleComplete,
  id:id
})

export const deleteToDo = (id:number) =>({
  type:ToDoConstants.ToDoDelete,
  id:id
})

export const EditUpdate = () =>(
  (dispatch,getstate) => {
    const state = getstate();
    dispatch(EditUpdateM(state.getIn(['UIHandler'])))
    dispatch(EditMode({id:null}))
  }
)


export const EditUpdateM = (UIstate) =>({
  type:ToDoConstants.ToDoUpdate,
  id:UIstate.get('isEdit'),
  text:UIstate.get('editInputText')
})
