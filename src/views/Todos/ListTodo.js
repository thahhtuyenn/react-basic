import React from "react";
import "./Todo.scss";
import ChildTodo from "./ChildTodo";
import AddTodo from "./AddTodo";

class ListTodo extends React.Component {
  state = {
    listToDo: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making videos" },
      { id: "todo3", title: "Fixing bugs" },
    ],
  };

  addTodo = (todo) => {
    this.setState({
      listToDo: [...this.state.listToDo, todo],
    });
  };

  deleteOneTodo = (todo) => {
    let { currentListToDo } = this.state;
    currentListToDo = currentListToDo.filter((item) => item.id !== todo.id);
    this.setState({
      listToDo: currentListToDo,
    });
  };

  render() {
    let { listToDo } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodo addTodo={this.addTodo} />
        <ChildTodo listToDo={listToDo} deleteOneTodo={this.deleteOneTodo} />
      </div>
    );
  }
}

export default ListTodo;
