import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';



const ToDoEditItem = ({text,onChangeEditText,onEditUpdate,onCancelEditMode}) => {

    return(
        <li>
            <input
                onChange={onChangeEditText}
                type='text'
                value={text}
            />
            <input
                onClick={onEditUpdate}
                type='button'
                value='確定'
            />
            <input
                onClick={onCancelEditMode}
                type='button'
                value='取消'
            />
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
