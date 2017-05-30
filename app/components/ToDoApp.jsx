import React from 'react';
import ToDoHeader from '../container/ToDoHeader.jsx';
import ToDoList from '../container/ToDoList.jsx'
import ToDoFooter from '../container/ToDoFooter.jsx'

const ToDoApp = () => {
    return(
        <div>
            <ToDoHeader />
            <ToDoList />
            <ToDoFooter />
        </div>
    )
}

export default ToDoApp;
