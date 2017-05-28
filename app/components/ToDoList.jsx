import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import ToDoViewItem from './ToDoViewItem.jsx';

const ToDoList = ({ToDoItems,onDelete,onEditMode,onCancelEditMode,onEditUpdate}) =>{
  return (
      <ul>
          {
            ToDoItems.map((ToDo,index)=>(
                <ToDoViewItem
                    ToDo={ToDo}
                    key={ToDo.get('id')}
                    onDelete={onDelete}
                    onEditMode={onEditMode}
                />
              ))
          }
      </ul>

  )
}

ToDoList.propTypes = {
  ToDoItems:PropTypes.instanceOf(Immutable.List),
  onCancelEditMode:PropTypes.func.isRequired,
  onDelete:PropTypes.func.isRequired,
  onEditMode:PropTypes.func.isRequired,
  onEditUpdate:PropTypes.func.isRequired
}

ToDoList.defaultProps = {
  ToDoItems:[]
}

export default ToDoList;
