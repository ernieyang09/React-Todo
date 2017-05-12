require('./assets/style/style.css');

import React from 'react';
import ReactDOM from 'react-dom';
import ToDoHeader from './components/ToDoHeader';
import ToDoConstants from './constants/ToDoConstants';

class App extends React.Component {
  constructor(props) {
    super(props);

  }
  render(){
    return (<div>Hello World!</div>);
  }
}

ReactDOM.render(<App/>,document.getElementById('App'));
