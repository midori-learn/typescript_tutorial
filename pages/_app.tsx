import React from 'react';
import { Provider } from 'react-redux';
import { TodoList } from '../components';
import store from '../redux/stores';
import IndexPage from './index';
import Todo from './todo';
const App = () => {
  return <Provider store = {store}>
    <IndexPage/>
  </Provider>;
};

export default App;
