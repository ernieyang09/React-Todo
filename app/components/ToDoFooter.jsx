import React from 'react';
import PropTypes from 'prop-types';

const ToDoFooter = (props) =>{
  const { ToDoTotal,DoneCount } = props;
  return (
      <div>
          {'總共'}{ToDoTotal}{' 已完成 '}{DoneCount}{' 未完成 '}{ToDoTotal-DoneCount}
      </div>
  )
}

ToDoFooter.propTypes = {
    DoneCount:PropTypes.number.isRequired,
    ToDoTotal:PropTypes.number.isRequired
}

ToDoFooter.defaultProps = {
  ToDoTotal:0,
  DoneCount:0
}


export default ToDoFooter;
