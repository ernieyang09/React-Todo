import ToDoConstants from '../constants/ToDoConstants';

export const changeText = (payload: {text:string}) => ({
      type:ToDoConstants.ToDoAddDraft,
      text:payload.text
});
