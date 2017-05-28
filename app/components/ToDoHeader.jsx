import React from 'react';
import PropTypes from 'prop-types';

const ToDoHeader = ({onCreateTodo,onChangeText,...props}) => {
  return (
      <div>
          <input
              onChange={onChangeText}
              type='text'
              value={props.addText}
          />
          <input
              onClick={onCreateTodo}
              type='button'
              value='新增'

          />
      </div>
  );


}

ToDoHeader.propTypes = {
  addText:PropTypes.string.isRequired,
  onChangeText:PropTypes.func.isRequired,
  onCreateTodo:PropTypes.func.isRequired

}

export default ToDoHeader;
