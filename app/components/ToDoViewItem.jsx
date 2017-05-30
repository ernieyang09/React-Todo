import React from 'react';
import PropTypes from 'prop-types';

const ToDoViewItem = ({
  text,
  isComplete,
  onClickDelete,
  onClickEdit,
  onChangeComplete
}) => {

  return(
      <li>
          <label>
              <input
                  checked={isComplete}
                  onChange={onChangeComplete}
                  type='checkbox'
              />
              {text}
          </label>
          <input
              onClick={onClickEdit}
              type='button'
              value='編輯'
          />
          <input
              onClick={onClickDelete}
              type='button'
              value='刪除'
          />
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
