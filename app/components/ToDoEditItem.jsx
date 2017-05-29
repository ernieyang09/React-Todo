import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';



const ToDoEditItem = ({text,onChangeEditText,onEditUpdate,onCancelEditMode}) => {
    const handlerText = (e) => {
        onChangeEditText(e.target.value)
    }
    const handlerCancel = () => {
        onCancelEditMode();
    }
    const handlerUpdate = () => {
        onEditUpdate()
    }
    return(
        <li>
            <input
                onChange={handlerText}
                type='text'
                value={text}
            />
            <input
                onClick={handlerUpdate}
                type='button'
                value='確定'
            />
            <input
                onClick={handlerCancel}
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
