import './assets/style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Perf from 'react-addons-perf';
import ToDoHeader from './components/ToDoHeader.jsx';
import ToDoList from './components/ToDoList.jsx';
import ToDoFooter from './components/ToDoFooter.jsx';
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

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return true;
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
            <ToDoList ToDoItems={this.state.ToDos} />
            <ToDoFooter
                DoneCount={this.state.DoneCount}
                ToDoTotal={this.state.ToDoTotal}
            />
        </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('App'));
