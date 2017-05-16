import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';

const ToDoHeader = (props) =>{
   let txtToDo;
   let importFileNode;
   const onAdd = () => {
       let newToDo = txtToDo.value.trim();
       if(newToDo==='')
         return;
       ToDoAction.ToDoCreate(newToDo);
       txtToDo.value = '';
   }

   const importFile = () => {
      importFileNode.click();
   }

   const exportFile = () => {
       const JSON = ToDoAction.ToDoExport();
       console.log(JSON)

   }

   return (<div>
             <input type='text' placeholder = {props.text} ref={node => txtToDo = node }/>
             <input type='button' value='新增' onClick = {onAdd}/>
             <input type='file' ref={node => importFileNode = node}/>
             <input type='button' value='匯入' onClick = {importFile}/>
             <input type='button' value='匯出' onClick = {exportFile}/>
           </div>)

};

ToDoHeader.propTypes = {
   text:PropTypes.string
};

export default ToDoHeader;
