import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ToDoAction from '../actions/ToDoAction';
import ToDoItem from '../components/ToDoItem';

const ToDoList = (props) =>{
        return(
        <ul>
          {
            props.ToDoItems.map((ToDo,index)=> <ToDoItem  key={index} {...ToDo}/> )
          }
        </ul>
        )
}

export default ToDoList;
