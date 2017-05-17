import React from 'react';
import PropTypes from 'prop-types';

const ToDoHeader = (props) =>{
   let txtToDo;
   let importFileNode;
   const onAdd = () => {
       let newToDo = txtToDo.value.trim();
       if(newToDo==='')
         return;
       props.onAdd(newToDo);
       txtToDo.value = '';
   }

   const importFileClick = () => {
      importFileNode.click();
   }

   const importHandler = () => {
      props.onImport({file:importFileNode.files[0]});
      importFileNode.value='';
   }

   const exportFile = () => {
      props.onExport();
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
   onExport:PropTypes.func.isRequired,
   text:PropTypes.string
};

ToDoHeader.defaultProps = {
  text: ''
};

export default ToDoHeader;
