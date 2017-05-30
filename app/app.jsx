require('./assets/style/style.css');
require('bootstrap-css-only');

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Reducers from './reducers/index.jsx';
import ToDoApp from './components/ToDoApp.jsx';


sessionStorage.setItem('id',0);

const store = createStore(Reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);


 window.a = store;

ReactDOM.render(
    <Provider store={store}>
        <ToDoApp />
    </Provider>,
  document.getElementById('Root')
);

//ReactDOM.render(<ToDoApp />,document.getElementById('Root'));
