import React from "react";
import { toast } from "react-toastify";

class ChildTodo extends React.Component {
  handleClickDelete = (todo) => {
    this.props.deleteOneTodo(todo);
    toast.info("Deleted one to do.");
  };
  handleClickEdit = (todo) => {
    this.props.editOneTodo(todo);
  };
  handleChangeEdit = (event) => {};

  render() {
    let { listToDo, editTodo } = this.props;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return <></>;
  }
}

export default ChildTodo;
