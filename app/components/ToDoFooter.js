import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';

class ToDoFooter extends Component {
  constructor(props){
    super(props);

  }

  render(){
    const {ToDoTotal,DoneCount} = this.props;
    return (
      <div>
        總共 {ToDoTotal} 已完成 {DoneCount} 未完成 {ToDoTotal-DoneCount}
      </div>
    )
  }
}


ToDoFooter.propTypes = {
    ToDoTotal:PropTypes.number.isRequired,
    DoneCount:PropTypes.number.isRequired
}

ToDoFooter.defaultProps = {
  ToDoTotal:0,
  DoneCount:0
}


export default ToDoFooter;
