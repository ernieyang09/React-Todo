import './assets/style/style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Perf from 'react-addons-perf';
import ToDoHeader from './components/ToDoHeader.jsx';
import ToDoList from './components/ToDoList.jsx';
import ToDoFooter from './components/ToDoFooter.jsx';
import ToDoAction from './actions/ToDoAction';
import ToDoStore from './stores/ToDoStore';

window.Perf = Perf;

const AppProps = {
  _onAdd:ToDoAction.ToDoCreate,
  _onDelete:ToDoAction.ToDoDelete,
  _onUpdate:ToDoAction.ToDoUpdate,
  _onToggleEdit:ToDoAction.ToDoToggleEdit,
  _onImport:ToDoAction.ToDoImport,
  _onExport:ToDoAction.ToDoExport

}

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
    //console.log(nextProps, nextState);
    return true;
  }

  componentWillUnmount() {
    ToDoStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(ToDoStore.getTodos());
  }



  render(){
    const {_onAdd,_onDelete,_onUpdate,_onToggleEdit,_onImport,_onExport}=this.props;
    return (
        <div>
            <ToDoHeader
                onAdd={_onAdd}
                onExport={_onExport}
                onImport={_onImport}
                text='請輸入代辦事項'
            />
            <ToDoList
                ToDoItems={this.state.ToDos}
                onDelete={_onDelete}
                onToggleEdit={_onToggleEdit}
                onUpdate={_onUpdate}
            />
            <ToDoFooter
                DoneCount={this.state.DoneCount}
                ToDoTotal={this.state.ToDoTotal}
            />
        </div>
    );
  }
}

App.propTypes = {
   _onAdd:PropTypes.func.isRequired,
   _onDelete:PropTypes.func.isRequired,
   _onExport:PropTypes.func.isRequired,
   _onImport:PropTypes.func.isRequired,
   _onToggleEdit:PropTypes.func.isRequired,
   _onUpdate:PropTypes.func.isRequired
};


ReactDOM.render(<App {...AppProps} />,document.getElementById('App'));
