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

   const importFileClick = () => {
      importFileNode.click();
   }

   const importHandler = () => {

      ToDoAction.ToDoImport({file:importFileNode.files[0]});
      importFileNode.value='';


   }

   const exportFile = () => {
      ToDoAction.ToDoExport();
   }

   return (<div>
             <input type='text' placeholder = {props.text} ref={node => txtToDo = node }/>
             <input type='button' value='新增' onClick = {onAdd}/>
             <input type='file' ref={node => importFileNode = node} onChange ={importHandler} multiple={false} accept='.json'/>
             <input type='button' value='匯入' onClick = {importFileClick}/>
             <input type='button' value='匯出' onClick = {exportFile}/>
           </div>)

};

ToDoHeader.propTypes = {
   text:PropTypes.string
};

export default ToDoHeader;
