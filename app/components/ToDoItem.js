import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';

const ToDoItem = (props) => {
  let editNode;
  const toggleCheckBox = () => {
    const checked = !props.checked;
    ToDoAction.ToDoUpdate({id: props.id, content: props.content, checked : checked});
  }

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

  const deleteToDo = () => {
    if(confirm('確定要刪除')) {
      ToDoAction.ToDoDelete(props);
    }
  }

  const renderEditMode = (props) => {
    return (
      <li>
        <input type='text' defaultValue = {props.content} ref={ node => editNode = node } /> <input type= 'button' value = '確定' onClick={updateContent} /> <input type='button' value = '取消' onClick ={toggleEditMode}/>
      </li>
    )

  }

  const renderViewMode = (props) =>{
        return (
          <li>
            <label><input type='checkbox' checked = {props.checked} onChange = {toggleCheckBox}/> {props.content}</label> <input type='button' value='修改' onClick = {toggleEditMode}/> <input type='button' value='刪除' onClick = {deleteToDo}/>
          </li>

        )
  }

  return(!props.edit)?renderViewMode(props):renderEditMode(props);

}

export default ToDoItem;
