import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';
import ToDoItem from '../components/ToDoItem';


class ToDoList extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ul>
        {
          this.props.ToDoItems.map((ToDo,i)=> <ToDoItem {...ToDo} key={i}/> )
        }
      </ul>
    )
  }
}

export default ToDoList;
