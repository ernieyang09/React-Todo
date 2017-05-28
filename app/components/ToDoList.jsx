import React from 'react';
import PropTypes from 'prop-types';

const ToDoList = ({ToDoItems,...props}) =>{
  return (
      <ul>
          {
            ToDoItems.map((ToDo,index)=>{
                  return  <li key={ToDo.id}>{ToDo.text}</li>
              })
          }
      </ul>

  )
}

ToDoList.propTypes = {
  ToDoItems:PropTypes.arrayOf(PropTypes.shape({
    text:PropTypes.string.isRequired
  }))
}

ToDoList.defaultProps = {
  ToDoItems:[]
}

export default ToDoList;
