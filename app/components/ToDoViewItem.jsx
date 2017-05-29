import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';


const ToDoViewItem = ({ToDo,onDelete,onEditMode,onChangeComplete}) => {

  const handleDelClick = () => {
    if(confirm('確定要刪除')){
      onDelete(ToDo.get('id'))
    }
  }

  const handlerCheck = (e) => {
    onChangeComplete(ToDo.get('id'));
  }

  const handlerEditClick = () => {
    onEditMode(ToDo.get('id'));
  }

  return(
      <li>
          <label>
              <input
                  defaultChecked={ToDo.get('isComplete')}
                  onChange={handlerCheck}
                  type='checkbox'
              />
              {ToDo.get('text')}
          </label>
          <input
              onClick={handlerEditClick}
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
  onChangeComplete:PropTypes.func.isRequired,
  onDelete:PropTypes.func.isRequired,
  onEditMode:PropTypes.func.isRequired
}

export default ToDoViewItem;
