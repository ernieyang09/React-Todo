import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';


class ToDoItem extends Component {
  constructor(props){
    super(props);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
    this.state = {
      checked : this.props.checked,
      content : this.props.content,
      edit : false
    }
  }

  toggleCheckBox(){
    this.setState({checked : !this.state.checked});
  }

  render(){
    return (
      <li>
        <input type='checkbox' checked = {this.state.checked} onChange = {this.toggleCheckBox}/> {this.state.content} <input type='button' value='刪除'/>
      </li>

    )

  }
}



export default ToDoItem;
