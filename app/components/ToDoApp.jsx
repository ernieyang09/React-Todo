import React from 'react';
import ToDoHeader from '../container/ToDoHeader.jsx';
import ToDoList from '../container/ToDoList.jsx'
import ToDoFooter from '../container/ToDoFooter.jsx'

const ToDoApp = () => {
    return(
        <div className='panel panel-warning' >
            <div className="panel-heading">
                <h3 className="panel-title">{'TodoApp'}</h3>
            </div>
            <div className="panel-body">
                <ToDoHeader />
                <ToDoList />
            </div>
            <div className='panel-footer'>
                <ToDoFooter />
            </div>
        </div>
    )
}

export default ToDoApp;
