import { connect } from 'react-redux';
import TodoHeader from '../components/TodoHeader.jsx';
import {createTodo} from '../actions/ToDoAction';
import {changeText} from '../actions/UIActions'


const mapStateToProps = (state) => ({
  addText:state.getIn(['UIHandler','addInputText'])
});


const mapDispatchToProps = (dispatch) => ({
  // 當使用者在 input 輸入資料值即會觸發這個函數，發出 changeText action 並附上使用者輸入內容 event.target.value
  onChangeText: (event) => (
    dispatch(changeText({text: event.target.value}))
  ),
  // 當使用者按下送出時，發出 createTodo action 並清空 input
  onCreateTodo: () => {
    dispatch(createTodo());
    dispatch(changeText({ text: '' }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoHeader);
