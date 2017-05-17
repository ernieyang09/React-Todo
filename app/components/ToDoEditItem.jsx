import React from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';


const ToDoEditItem =(props)=>{
  let editNode;

  const toggleEditMode = () => {
    ToDoAction.ToDoToggleEdit({id: props.id, edit:!props.edit});
  }

  const updateContent = () => {
    const editText = editNode.value.trim();
    if(editText===''){
      alert('Error:不能為空');
      return;
    }
    ToDoAction.ToDoUpdate({id: props.id, content: editText, checked : props.checked});
  }

  return (
      <li>
          <input
              defaultValue={props.content}
              ref={node => editNode = node}
              type='text'
          />
          <input
              onClick={updateContent}
              type='button'
              value='確定'

          />
          <input
              onClick={toggleEditMode}
              type='button'
              value='取消'
          />
      </li>
  )
}


ToDoEditItem.propTypes={
  checked:PropTypes.bool,
  content:PropTypes.string,
  id:PropTypes.number.isRequired
}

ToDoEditItem.defaultProps={
  checked:false,
  content:''
}

export default ToDoEditItem;
