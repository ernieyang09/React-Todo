import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';


class ToDoList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul>
        <li>test1</li>
      </ul>
    )
  }
}

export default ToDoList;
