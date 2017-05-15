import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';


class ToDoItem extends Component {
  constructor(props){
    super(props);
    this.toggleCheckBox = this.toggleCheckBox.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.updateContent = this.updateContent.bind(this);

    this.state = {
      editMode : false
    }
  }


  toggleCheckBox(){
    const checked = !this.props.checked;
    ToDoAction.ToDoUpdate({id: this.props.id, content: this.props.content, checked : checked});
  }

  toggleEditMode(){
    this.setState({editMode: !this.state.editMode });
  }

  updateContent(){
    const editText = this.refs.editText.value.trim();
    if(editText===''){
      alert('Error:不能為空');
      return;
    }
    ToDoAction.ToDoUpdate({id: this.props.id, content: editText, checked : this.props.checked});
    this.setState({editMode: !this.state.editMode });
  }

  deleteToDo() {
    if(confirm('確定要刪除')) {
      ToDoAction.ToDoDelete(this.props);
    }
  }

  renderEditMode(){
    return (
      <li>
        <input type='text' defaultValue = {this.props.content} ref='editText' /> <input type= 'button' value = '確定' onClick={this.updateContent} /> <input type='button' value = '取消' onClick ={this.toggleEditMode}/>
      </li>
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
