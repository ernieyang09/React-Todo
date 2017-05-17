import React from 'react';
import PropTypes from 'prop-types';
import { Button,Input } from 'material-components';

const ToDoHeader = (props) =>{
   let txtToDo;
   let importFileNode;
   const onAdd = () => {
       let newToDo = txtToDo.props.value.trim();
       if(newToDo==='')
         return;
       props.onAdd(newToDo);
       txtToDo.props.value = '';
   }

   const typeHandler = (e) => {
      props.onDraft({text:e.target.value});
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
       <Input
           label={props.text}
           onChange={typeHandler}
           ref={node => txtToDo = node}
           value={props.Draft}
       />
       <Button
           flat
           onTouchTap={onAdd}
           type='button'
       >{'新增'}</Button>
       <input
           accept='.json'
           id='File'
           multiple={false}
           onChange={importHandler}
           ref={node => importFileNode = node}
           type='file'
       />
       <Button
           flat
           onTouchTap={importFileClick}
           type='button'
       >{'匯入'}</Button>
       <Button
           flat
           onTouchTap={exportFile}
           type='button'
       >{'匯出'}</Button>
   </div>)

};

ToDoHeader.propTypes = {
   Draft:PropTypes.string.isRequired,
   onExport:PropTypes.func.isRequired,
   text:PropTypes.string
};

ToDoHeader.defaultProps = {
  text: ''
};

export default ToDoHeader;
