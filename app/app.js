import './assets/style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
import ToDoHeader from './components/ToDoHeader';
import ToDoList from './components/ToDoList';
import ToDoFooter from './components/ToDoFooter';
import ToDoStore from './stores/ToDoStore';

window.Perf = Perf;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ToDoStore.getTodos();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
    ToDoStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ToDoStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(ToDoStore.getTodos());
  }

  render(){
    return (
      <div>
        <ToDoHeader text='請輸入代辦事項' />
        <ToDoList ToDoItems = {this.state.ToDos}/>
        <ToDoFooter ToDoTotal = {this.state.ToDoTotal} DoneCount = { this.state.DoneCount}/>
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('App'));
