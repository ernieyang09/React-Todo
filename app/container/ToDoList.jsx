import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList.jsx';


const mapStateToProps = (state) => ({
  ToDoItems:state.get('ToDoItems')
});


const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoList);
