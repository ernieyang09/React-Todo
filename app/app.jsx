import './assets/style/style.css';
import 'material-components/lib/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Perf from 'react-addons-perf';
import ToDoHeader from './components/ToDoHeader.jsx';
import ToDoList from './components/ToDoList.jsx';
import ToDoFooter from './components/ToDoFooter.jsx';
import ToDoAction from './actions/ToDoAction';
import ToDoStore from './stores/ToDoStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

window.Perf = Perf;

const AppProps = {
  _onAdd:ToDoAction.ToDoCreate,
  _onDelete:ToDoAction.ToDoDelete,
  _onDraft:ToDoAction.ToDoDraft,
  _onUpdate:ToDoAction.ToDoUpdate,
  _onToggleEdit:ToDoAction.ToDoToggleEdit,
  _onImport:ToDoAction.ToDoImport,
  _onExport:ToDoAction.ToDoExport

}

class App extends React.Component {
  static displayName='Application';

  static childContextTypes = {
    componentStyle: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = ToDoStore.getTodos();
    this._onChange = this._onChange.bind(this);
  }

   getChildContext() {
     return {
       componentStyle: {
         primaryColor: '#FFC107',
         primaryFontColor: 'rgba(0, 0, 0, 0.7)',
         secondaryColor: '#009688',
         secondaryFontColor: 'rgba(255, 255, 255, 0.9)',
         errorColor: '#C00',
         successColor: '#090',
         typographyColor: '#212121'
       }
     };
   }

  componentDidMount() {
    ToDoStore.addChangeListener(this._onChange);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUnmount() {
    ToDoStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(ToDoStore.getTodos());
  }



  render(){
    const {_onAdd,_onDelete,_onDraft,_onUpdate,_onToggleEdit,_onImport,_onExport}=this.props;
    return (
        <div>
            <ToDoHeader
                Draft={this.state.DraftWord}
                onAdd={_onAdd}
                onDraft={_onDraft}
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
   _onDraft:PropTypes.func.isRequired,
   _onExport:PropTypes.func.isRequired,
   _onImport:PropTypes.func.isRequired,
   _onToggleEdit:PropTypes.func.isRequired,
   _onUpdate:PropTypes.func.isRequired
};


ReactDOM.render(<App {...AppProps} />,document.getElementById('App'));
