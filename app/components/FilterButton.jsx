import React from 'react';
import PropTypes from 'prop-types';

const FilterButton = ({
  onItemClick,
  children
}) => {

  return (
      <span
          className='btn btn-default'
          onClick={onItemClick}
      >
          {children}
      </span>

  );


}

FilterButton.propTypes = {
  children:PropTypes.node,
  onItemClick:PropTypes.func.isRequired
}

FilterButton.defaultProps = {
  children:[]
}


export default FilterButton;
