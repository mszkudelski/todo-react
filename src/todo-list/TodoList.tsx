import React from 'react';
import './TodoList.css';
import TodoAdd from '../todo-add/TodoAdd';

const TodoList: React.FC = () => {
  const addTodo = (value: string) => {
    console.log(value);
  };

  return (
    <div className="TodoList">
      <TodoAdd valueChange={addTodo} />
    </div>
  );
};

export default TodoList;
