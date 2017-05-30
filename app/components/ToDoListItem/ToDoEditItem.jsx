import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import classes from './ToDoListItem.scss';


const ToDoEditItem = ({text,onChangeEditText,onEditUpdate,onCancelEditMode}) => {

    return(
        <li
            className={`${classes.listItem} list-group-item`}
        >
            <div className='row'>
                <div className='col-md-10'>
                    <input
                        className={`${classes.formControl} form-control`}
                        onChange={onChangeEditText}
                        type='text'
                        value={text}
                    />
                </div>
                <div className='col-md-2'>
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
