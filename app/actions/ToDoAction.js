import ToDoConstants from '../constants/ToDoConstants';


export const createTodo = () => {
  return (dispatch,getstate) => {
    const state = getstate();
    dispatch(createTodoM(state.getIn(['UIHandler','addInputText'])))
  }
}

export const createTodoM = (text) => ({
  type:ToDoConstants.ToDoCreate,
  text:text
})


export const deleteToDo = (id:number) =>({
  type:ToDoConstants.ToDoDelete,
  id:id
})
