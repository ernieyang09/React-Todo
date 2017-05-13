require('./assets/style/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import ToDoHeader from './components/ToDoHeader';
import ToDoList from './components/ToDoList';
import ToDoFooter from './components/ToDoFooter';
import ToDoStore from './stores/ToDoStore';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    ToDoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(ToDoStore.getTodos());
  }

  render(){
    return (
      <div>
        <ToDoHeader text='請輸入代辦事項' />
        <ToDoList/>
        <ToDoFooter/>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('App'));
