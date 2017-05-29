import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import ToDoViewItem from './ToDoViewItem.jsx';
import ToDoEditItem from './ToDoEditItem.jsx';

const ToDoList = ({ToDoItems,onDelete,onEditMode,onChangeEditText,onCancelEditMode,onEditUpdate,onChangeComplete,DraftID,DraftText}) =>{

  return (
      <ul>
          {
            ToDoItems.map((ToDo,index)=>
                (ToDo.get('id')!==DraftID)?
                    <ToDoViewItem
                        ToDo={ToDo}
                        key={ToDo.get('id')}
                        onChangeComplete={onChangeComplete}
                        onDelete={onDelete}
                        onEditMode={onEditMode}
                    />
                :
                    <ToDoEditItem
                        key={ToDo.get('id')}
                        onCancelEditMode={onCancelEditMode}
                        onChangeEditText={onChangeEditText}
                        onEditUpdate={onEditUpdate}
                        text={DraftText}
                    />
            )
          }
      </ul>

  )
}

ToDoList.propTypes = {
  DraftID:PropTypes.number,
  DraftText:PropTypes.string,
  ToDoItems:PropTypes.instanceOf(Immutable.List),
  onCancelEditMode:PropTypes.func.isRequired,
  onChangeComplete:PropTypes.func.isRequired,
  onChangeEditText:PropTypes.func.isRequired,
  onDelete:PropTypes.func.isRequired,
  onEditMode:PropTypes.func.isRequired,
  onEditUpdate:PropTypes.func.isRequired
}

ToDoList.defaultProps = {
  DraftID:null,
  DraftText:'',
  ToDoItems:[]
}

export default ToDoList;
