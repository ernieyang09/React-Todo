import ToDoConstants from '../constants/ToDoConstants';


export const toggleMode = (payload : {type:string})=> ({
    type:ToDoConstants.ToDoToggleMode,
    filter:payload.type
})
