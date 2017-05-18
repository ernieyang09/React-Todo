import React from 'react';
import PropTypes from 'prop-types';
import ToDoModeButton from './ToDoModeButton.jsx';

const ToDoFooter = (props) =>{
  const { ToDoTotal,DoneCount } = props;

  return (
      <div id='Footer'>
          <ToDoModeButton
              isActive={(props.Mode==='All')?'Active':''}
              mode='All'
              onToggleShow={props.onToggleShow}
              text='全部'
          />
          {ToDoTotal}
          <ToDoModeButton
              isActive={(props.Mode==='Done')?'Active':''}
              mode='Done'
              onToggleShow={props.onToggleShow}
              text='已完成事項'
          />
          {DoneCount}
          <ToDoModeButton
              isActive={(props.Mode==='unDone')?'Active':''}
              mode='unDone'
              onToggleShow={props.onToggleShow}
              text='未完成'
          />
          {ToDoTotal-DoneCount}
      </div>
  )
}

ToDoFooter.propTypes = {
    DoneCount:PropTypes.number.isRequired,
    Mode:PropTypes.string.isRequired,
    ToDoTotal:PropTypes.number.isRequired,
    onToggleShow:PropTypes.func.isRequired
}

ToDoFooter.defaultProps = {
  ToDoTotal:0,
  DoneCount:0
}


export default ToDoFooter;
