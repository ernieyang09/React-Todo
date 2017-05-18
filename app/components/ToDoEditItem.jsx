import React from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';
import { Button,Input } from 'material-components';

const ToDoEditItem =(props)=>{
  let editNode;

  const toggleEditMode = () => {
    ToDoAction.ToDoToggleEdit({id: props.id, edit:!props.edit});
  }

  const typeHandler = (e) => {
    ToDoAction.ToDOEditDraft({id:props.id,text:e.target.value});
  }

  const updateContent = () => {
    const editText = editNode.props.value.trim();
    if(editText===''){
      alert('Error:不能為空');
      return;
    }
    ToDoAction.ToDoUpdate({id: props.id, content: editText, checked : props.checked});
  }

  return (
      <li>
          <Input
              onChange={typeHandler}
              ref={node => editNode = node}
              style={{'width':'200px'}}
              value={props.EditDraft}
          />
          <Button
              flat
              onTouchTap={updateContent}
          >{'確定'}</Button>
          <Button
              flat
              onTouchTap={toggleEditMode}
          >{'取消'}</Button>
      </li>
  )
}


ToDoEditItem.propTypes={
  EditDraft:PropTypes.string,
  checked:PropTypes.bool,
  id:PropTypes.number.isRequired
}

ToDoEditItem.defaultProps={
  checked:false,
  EditDraft:''
}

export default ToDoEditItem;
