import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './todo-list/TodoList';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>TODOs React</p>
      </header>
      <TodoList />
    </div>
  );
};

export default App;
