import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList.jsx';
import {ToggleComplete,deleteToDo,EditUpdate} from '../actions/ToDoAction';
import {changeEditText,EditMode} from '../actions/UIActions'

const mapStateToProps = (state) => ({
  ToDoItems:state.getIn(['ToDoItems']),
  DraftID:state.getIn(['UIHandler','isEdit']),
  DraftText:state.getIn(['UIHandler','editInputText']),
  ShowMode:state.get('ShowMode')
});


const mapDispatchToProps = (dispatch) => ({
  onDelete: (id: number) => {
    dispatch(deleteToDo(id));
  },
  onChangeComplete: (id:number) => {
    dispatch(ToggleComplete(id));
  },
  onChangeEditText: (event)=>{
    dispatch(changeEditText({text:event.target.value}));
  },
  onEditMode: (id:number) => {
    dispatch(EditMode({id:id}));
  },
  onCancelEditMode: () => {
    dispatch(EditMode({id:null}));
  },
  onEditUpdate: () => {
    dispatch(EditUpdate());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);
