import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'semantic-ui-css/semantic.min.css';
import 'highlight.js/styles/atom-one-dark.css';

import createHistory from 'history/createBrowserHistory'
import configureStore from './store'

import Root from './containers/Root';

// import registerServiceWorker from './registerServiceWorker';

const initialState = {}
const history = createHistory()
const store = configureStore(initialState, history)
const rootEl = document.getElementById('root')


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

const render = Component => {
  ReactDOM.render(
    <Component history={history} store={store} />,
    rootEl
  )
}

// Start the app
render(Root)
