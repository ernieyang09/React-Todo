import React from 'react';
import PropTypes from 'prop-types';

const getActiveStatus = (current,filter) => current===filter;
const getStyle = (filter) => {
  switch(filter){
    case 'SHOW_ALL':
      return 'btn-primary';
    case 'SHOW_DONE':
      return 'btn-success';
    case 'SHOW_UNDO':
      return 'btn-danger';
  }
}

const FilterButton = ({
  onItemClick,
  children,
  current,
  filter
}) => {

  const Status = getActiveStatus(current,filter);

  return (
      <input
          className={`btn btn-sm ${getStyle(filter)}`}
          disabled={Status}
          onClick={onItemClick}
          style={{marginRight:2,marginLeft:5}}
          type='button'
          value={children}
      />

  );


}

FilterButton.propTypes = {
  children:PropTypes.node,
  current:PropTypes.string.isRequired,
  filter:PropTypes.string.isRequired,
  onItemClick:PropTypes.func.isRequired
}

FilterButton.defaultProps = {
  children:[]
}


export default FilterButton;
