import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList.jsx';
import {deleteToDo} from '../actions/ToDoAction';

const mapStateToProps = (state) => ({
  ToDoItems:state.get('ToDoItems')
});


const mapDispatchToProps = (dispatch) => ({
  onDelete: (id: number) => {
    dispatch(deleteToDo(id));
  },
  onEditMode: () => {
    dispatch();
  },
  onCancelEditMode: () => {
    dispatch();
  },
  onEditUpdate: () => {
    dispatch();
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);
