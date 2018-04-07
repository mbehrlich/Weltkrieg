import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Main from './components/main';
import {Provider} from 'react-redux';

document.addEventListener('DOMContentLoaded', () => {
  let root = document.getElementById('root');
  let store = configureStore();
  ReactDOM.render(<Provider store={store}><Main /></Provider>, root);
});
