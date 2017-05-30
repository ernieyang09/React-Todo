import React from 'react';
import PropTypes from 'prop-types';
import FilterButton from './FilterButton.jsx';

const ToDoFooter = ({
  ToDoCount,
  DoneCount,
  ShowMode,
  onChangeMode,
  ...props
}) => {

  return (
      <div>
          <FilterButton
              current={ShowMode}
              filter='SHOW_ALL'
              onItemClick={function(){onChangeMode('SHOW_ALL')}}
          >
              {'ALL'}{ToDoCount}
          </FilterButton>{' '}
          <FilterButton
              current={ShowMode}
              filter='SHOW_DONE'
              onItemClick={function(){onChangeMode('SHOW_DONE')}}
          >
              {'DONE'}{DoneCount}
          </FilterButton>{' '}
          <FilterButton
              current={ShowMode}
              filter='SHOW_UNDO'
              onItemClick={function(){onChangeMode('SHOW_UNDO')}}
          >
              {'UNDO'}{ToDoCount-DoneCount}
          </FilterButton>
      </div>
  );


}

ToDoFooter.propTypes = {
  DoneCount:PropTypes.number.isRequired,
  ShowMode:PropTypes.string.isRequired,
  ToDoCount:PropTypes.number.isRequired,
  onChangeMode:PropTypes.func.isRequired
}

export default ToDoFooter;
