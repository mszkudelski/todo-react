import React from 'react';
import './TodoList.css';
import TodoAdd from '../todo-add/TodoAdd';
import TodoItem from '../todo-item/TodoItem';

class TodoList extends React.Component {
  state: { todos: string[] };
  addTodo = (value: string) => {
    this.setState({ todos: [...this.state.todos, value] });
  };

  constructor(props: any) {
    super(props);

    this.state = { todos: [] };
  }

  render() {
    return (
      <div className="TodoList">
        <TodoAdd valueChange={this.addTodo} />
        {this.state.todos.map(todo => (
          <TodoItem key={todo} value={todo} />
        ))}
      </div>
    );
  }
}

export default TodoList;
