import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';

const ToDoHeader = (props) =>{
   let txtToDo;
   const onAdd = () => {
       let newToDo = txtToDo.value.trim();
       if(newToDo==='')
         return;
       ToDoAction.ToDoCreate(newToDo);
       txtToDo.value = '';
   }

   return (<div><input type='text' placeholder = {props.text} ref={node => txtToDo = node }/><input type='button' value='新增' onClick = {onAdd}/></div>)

};

ToDoHeader.propTypes = {
   text:PropTypes.string
};

export default ToDoHeader;
