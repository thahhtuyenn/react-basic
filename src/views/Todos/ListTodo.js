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

  render() {
    let { listToDo } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodo />
        <ChildTodo listToDo={listToDo} />
      </div>
    );
  }
}

export default ListTodo;
