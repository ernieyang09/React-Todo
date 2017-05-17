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
                            {...ToDo}
                        />
                    :
                        <ToDoViewItem
                            key={ToDo.id}
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
    }))
}

ToDoList.defaultProps = {
    ToDoItems : []
}

export default ToDoList;
