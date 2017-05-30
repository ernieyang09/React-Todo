import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import ToDoViewItem from './ToDoListItem/ToDoViewItem.jsx';
import ToDoEditItem from './ToDoListItem/ToDoEditItem.jsx';

const getVisibleToDo = (ToDos,filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return ToDos
    case 'SHOW_DONE':
      return ToDos.filter(ToDo => ToDo.get('isComplete'))
    case 'SHOW_UNDO':
      return ToDos.filter(ToDo => !ToDo.get('isComplete'))
  }
}

const ToDoList = ({
  ToDoItems,
  onDelete,
  onEditMode,
  onChangeEditText,
  onCancelEditMode,
  onEditUpdate,
  onChangeComplete,
  DraftID,
  DraftText,
  ShowMode
}) =>{
  const VisibleToDos = getVisibleToDo(ToDoItems,ShowMode);

  return (
      <ul
          className='list-group'
      >
          {
            VisibleToDos.map((ToDo,index)=>
                (ToDo.get('id')!==DraftID)?
                    <ToDoViewItem
                        isComplete={ToDo.get('isComplete')}
                        key={ToDo.get('id')}
                        onChangeComplete={function(){onChangeComplete(ToDo.get('id'))}}
                        onClickDelete={function (e){e.stopPropagation();if(confirm('確定要刪除')){ onDelete(ToDo.get('id')) }}}
                        onClickEdit={function(e){e.stopPropagation();onEditMode(ToDo.get('id'))}}
                        text={ToDo.get('text')}
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
  ShowMode:PropTypes.string.isRequired,
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
