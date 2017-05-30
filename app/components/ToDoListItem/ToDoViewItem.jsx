import React from 'react';
import PropTypes from 'prop-types';
import classes from './ToDoListItem.scss';


const ToDoViewItem = ({
  text,
  isComplete,
  onClickDelete,
  onClickEdit,
  onChangeComplete
}) => {

  return(
      <li
          className={`${classes.listItem} list-group-item`}
          onClick={onChangeComplete}
      >
          <input
              checked={isComplete}
              type='checkbox'
          />
          {text}
          <span className='pull-right'>
              <input
                  className='btn btn-default btn-xs'
                  onClick={onClickEdit}
                  type='button'
                  value='編輯'
              />
              <input
                  className='btn btn-default btn-xs'
                  onClick={onClickDelete}
                  type='button'
                  value='刪除'
              />
          </span>
      </li>
  )

}

ToDoViewItem.propTypes = {
  isComplete:PropTypes.bool.isRequired,
  onChangeComplete:PropTypes.func.isRequired,
  onClickDelete:PropTypes.func.isRequired,
  onClickEdit:PropTypes.func.isRequired,
  text:PropTypes.string.isRequired
}

export default ToDoViewItem;
