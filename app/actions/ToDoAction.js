import ToDoConstants from '../constants/ToDoConstants';

export const createTodoM = (text) => ({
  type:ToDoConstants.ToDoCreate,
  text:text
})

export const createTodo = () => {
  return (dispatch,getstate) => {
    const state = getstate();
    dispatch(createTodoM(state.getIn(['FormHandler','addInputText'])))
  }
}

export const changeText = (payload: {text:string}) => ({
      type:ToDoConstants.ToDoAddDraft,
      text:payload.text
});
