import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';

class ToDoHeader extends Component {
  constructor(props){
    super(props);
    this.onAdd = this.onAdd.bind(this);
  }


  onAdd(){
    let newToDo = this.refs.txtToDo.value.trim();
    ToDoAction.ToDoCreate(newToDo);
    this.refs.txtToDo.value = '';
  }

  render(){
    const {text} = this.props;
    return <div><input type='text' placeholder = {text} ref='txtToDo'/><input type='button' value='新增' onClick = {this.onAdd}/></div>
  }
}

//const ToDoHeader = ({text}) => <div><input type='text' placeholder = {text} /><input type='button' value='新增'/></div>

ToDoHeader.propTypes = {
   text:PropTypes.string
};

export default ToDoHeader;
