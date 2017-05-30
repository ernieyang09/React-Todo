import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';



const ToDoEditItem = ({text,onChangeEditText,onEditUpdate,onCancelEditMode}) => {

    return(
        <li
            className='list-group-item'
        >
            <div className='form-inline'>
                <input
                    className='form-control'
                    onChange={onChangeEditText}
                    type='text'
                    value={text}
                />
                <span className='pull-right'>
                    <input
                        className='btn btn-default btn-xs'
                        onClick={onEditUpdate}
                        type='button'
                        value='確定'
                    />
                    <input
                        className='btn btn-default btn-xs'
                        onClick={onCancelEditMode}
                        type='button'
                        value='取消'
                    />
                </span>
            </div>
        </li>

    )

}

ToDoEditItem.propTypes = {
    onCancelEditMode:PropTypes.func.isRequired,
    onChangeEditText:PropTypes.func.isRequired,
    onEditUpdate:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired
}



export default ToDoEditItem;
