import React from 'react';
import ToDoHeader from '../container/ToDoHeader.jsx';
import ToDoList from '../container/ToDoList.jsx'

// const ToDoApp = (props) => (
//     <div>
//         <ToDoHeader />
//         <ToDoList />
//     </div>
// )


const ToDoApp = () => {
    return(
        <div>
            <ToDoHeader />
            <ToDoList />
        </div>
    )
}

export default ToDoApp;
