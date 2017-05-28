import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';


const ToDoViewItem = ({ToDo,onDelete,onEditMode}) => {

  const handleDelClick = () => {
    if(confirm('確定要刪除')){
      onDelete(ToDo.get('id'))
    }
  }

  return(
      <li>
          <input type='checkbox' />
          {ToDo.get('text')}
          <input
              onClick={onEditMode}
              type='button'
              value='編輯'
          />
          <input
              onClick={handleDelClick}
              type='button'
              value='刪除'
          />
      </li>
  )

}

ToDoViewItem.propTypes = {
  ToDo:PropTypes.instanceOf(Immutable.Map).isRequired,
  onDelete:PropTypes.func.isRequired,
  onEditMode:PropTypes.func.isRequired
}

export default ToDoViewItem;
