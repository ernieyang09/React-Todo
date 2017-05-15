import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';


class ToDoItem extends Component {
  constructor(props){
    super(props);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);

    this.state = {
      editMode : false
    }
  }


  toggleCheckBox(){
    const checked = !this.props.checked;
    ToDoAction.ToDoUpdate({id: this.props.id, content: this.props.content, checked : checked});
  }

  toggleEditMode(){
    this.setState({editMode:true});

  }

  deleteToDo() {
    //if(confirm('確定要刪除')) {
      ToDoAction.ToDoDelete(this.props);
    //}
  }

  renderEditMode(){
    return (
      <div>1234</div>
    )

  }

  renderViewMode(){
    return (
      <li>
        <label><input type='checkbox' checked = {this.props.checked} onChange = {this.toggleCheckBox}/> {this.props.content}</label> <input type='button' value='修改' onClick = {this.toggleEditMode}/> <input type='button' value='刪除' onClick = {this.deleteToDo}/>
      </li>

    )
  }

  render(){
    return (!this.state.editMode)?this.renderViewMode():this.renderEditMode();
  }
}



export default ToDoItem;
