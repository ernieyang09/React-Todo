import { connect } from 'react-redux';
import ToDoFooter from '../components/ToDoFooter.jsx';
import { toggleMode } from '../actions/FilterActions'

const mapStateToProps = (state) => ({
  ToDoCount:state.get('ToDoItems').size,
  DoneCount:state.get('ToDoItems').filter(ToDo=>ToDo.get('isComplete')===true).size,
  ShowMode:state.get('ShowMode')
});


const mapDispatchToProps = (dispatch) => ({
  onChangeMode:( filter:string )=> {
    dispatch(toggleMode({type:filter}));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoFooter);
