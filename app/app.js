require('./assets/style/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import ToDoHeader from './components/ToDoHeader';
import ToDoStore from './stores/ToDoStore';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    return (<div><ToDoHeader text='請輸入代辦事項' /></div>);
  }
}

ReactDOM.render(<App/>,document.getElementById('App'));
