import React from 'react';
import PropTypes from 'prop-types';
import ToDoViewItem from '../components/ToDoViewItem.jsx';
import ToDoEditItem from '../components/ToDoEditItem.jsx';

const ToDoList = (props) =>{
    return(
        <ul>
            {
                props.ToDoItems.map((ToDo)=>
                    (ToDo.edit)?
                        <ToDoEditItem
                            key={ToDo.id}
                            onToggleEdit={props.onToggleEdit}
                            onUpdate={props.onUpdate}
                            {...ToDo}
                        />
                    :
                        <ToDoViewItem
                            key={ToDo.id}
                            onDelete={props.onDelete}
                            onUpdate={props.onUpdate}
                            {...ToDo}
                        />
                )
            }
        </ul>
    )
}

ToDoList.propTypes = {
    ToDoItems : PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        content:PropTypes.string.isRequired,
        edit:PropTypes.bool.isRequired,
        checked:PropTypes.bool.isRequired
    })),
    onUpdate : PropTypes.func.isRequired
}

ToDoList.defaultProps = {
    ToDoItems : []
}

export default ToDoList;
