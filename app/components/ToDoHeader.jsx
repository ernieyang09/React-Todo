import React from 'react';
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
       <input
           placeholder={props.text}
           ref={node => txtToDo = node}
           type='text'
       />
       <input
           onClick={onAdd}
           type='button'
           value='新增'
       />
       <input
           accept='.json'
           id='File'
           multiple={false}
           onChange={importHandler}
           ref={node => importFileNode = node}
           type='file'
       />
       <input
           onClick={importFileClick}
           type='button'
           value='匯入'
       />
       <input
           onClick={exportFile}
           type='button'
           value='匯出'
       />
   </div>)

};

ToDoHeader.propTypes = {
   text:PropTypes.string
};

ToDoHeader.defaultProps = {
  text: ''
};

export default ToDoHeader;
