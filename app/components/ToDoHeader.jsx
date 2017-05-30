import React from 'react';
import PropTypes from 'prop-types';

const ToDoHeader = ({onCreateTodo,onChangeText,...props}) => {
  return (
      <div
          className='input-group'
      >
          <input
              className='form-control'
              onChange={onChangeText}
              type='text'
              value={props.addText}
          />
          <span className='input-group-btn'>
              <input
                  className='btn btn-default'
                  onClick={onCreateTodo}
                  type='button'
                  value='新增'

              />
          </span>
      </div>
  );


}

ToDoHeader.propTypes = {
  addText:PropTypes.string.isRequired,
  onChangeText:PropTypes.func.isRequired,
  onCreateTodo:PropTypes.func.isRequired

}

export default ToDoHeader;
