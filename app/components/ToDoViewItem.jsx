import React from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';
import { Button,Checkbox } from 'material-components';

const ToDoViewItem = (props) => {

  const toggleEditMode = () => {
    ToDoAction.ToDoToggleEdit({id: props.id});
  }

  const toggleCheckBox = () => {
    const checked = !props.checked;
    ToDoAction.ToDoUpdate({id: props.id, content: props.content, checked : checked});
  }

  const deleteToDo = () => {
    if(confirm('確定要刪除')) {
      ToDoAction.ToDoDelete(props);
    }
  }

  return (
      <li>
          <Checkbox
              label={props.content}
              onChange={toggleCheckBox}
              style={{'verticalAlign':'middle','width':'200px','textOverflow':'ellipsis','overflow':'hidden','whiteSpace':'nowrap'}}
              value={props.checked}
          />
          <Button
              flat
              onTouchTap={toggleEditMode}
          >{'修改'}</Button>
          <Button
              flat
              onTouchTap={deleteToDo}
          >{'刪除'}</Button>
      </li>

  )

}

ToDoViewItem.propTypes={
  checked:PropTypes.bool,
  content:PropTypes.string
}

ToDoViewItem.defaultProps={
  checked:false,
  content:''
}

export default ToDoViewItem;
