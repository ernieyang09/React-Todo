import React from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';

const ToDoViewItem = (props) => {

  const toggleEditMode = () => {
    ToDoAction.ToDoToggleEdit({id: props.id, edit:!props.edit});
  }

  const toggleCheckBox = () => {
    const checked = !props.checked;
    ToDoAction.ToDoUpdate({id: props.id, content: props.content, checked : checked});
  }

  const deleteToDo = () => {
    if(confirm('確定要刪除')) {
      ToDoAction.ToDoDelete(props);
    }
  }

  return (
      <li>
          <label>
              <input
                  checked={props.checked}
                  onChange={toggleCheckBox}
                  type='checkbox'
              />
              {props.content}
          </label>
          <input
              onClick={toggleEditMode}
              type='button'
              value='修改'
          />
          <input
              onClick={deleteToDo}
              type='button'
              value='刪除'
          />
      </li>

  )

}

ToDoViewItem.propTypes={
  checked:PropTypes.bool,
  content:PropTypes.string
}

ToDoViewItem.defaultProps={
  checked:false,
  content:''
}

export default ToDoViewItem;
