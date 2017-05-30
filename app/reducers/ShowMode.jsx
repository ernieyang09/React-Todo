import ToDoConstants from '../constants/ToDoConstants';


const ShowMode = (state = 'SHOW_ALL' ,action) => {
    switch(action.type) {
        case ToDoConstants.ToDoToggleMode: {
            return action.filter;
        }
        default:
            return state;
    }

}

export default ShowMode;
