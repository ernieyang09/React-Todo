import React from 'react';
import PropTypes from 'prop-types';

const ToDoModeButton = (props)=> {

  const handleModeClick = () =>{
    props.onToggleShow({mode:props.mode});

  }

  return(
      <span
          className={(props.isActive +' toggleShow')}
          mode={props.mode}
          onClick={handleModeClick}
      >{props.text}</span>
  )

}

ToDoModeButton.propTypes = {
    isActive:PropTypes.string,
    mode:PropTypes.string.isRequired,
    onToggleShow:PropTypes.func.isRequired,
    text:PropTypes.string

}

ToDoModeButton.defaultProps = {
  isActive:'',
  text:''
}


export default ToDoModeButton;
