import React from "react";
import "./Todo.scss";
import ChildTodo from "./ChildTodo";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listToDo: [
      { id: "todo1", title: "Doing homework" },
      { id: "todo2", title: "Making videos" },
      { id: "todo3", title: "Fixing bugs" },
    ],
    editTodo: {},
  };

  addTodo = (todo) => {
    this.setState({
      listToDo: [...this.state.listToDo, todo],
    });
  };

  deleteOneTodo = (todo) => {
    let currentListToDo = this.state.listToDo;
    currentListToDo = currentListToDo.filter((item) => item.id !== todo.id);
    this.setState({
      listToDo: currentListToDo,
    });
    toast.info("Deleted one to do.");
  };

  editOneTodo = (todo) => {
    let { editTodo, listToDo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listToDoCopy = [...listToDo];
      let objIndex = listToDoCopy.findIndex((obj) => obj.id === todo.id);

      listToDoCopy[objIndex].title = editTodo.title;

      this.setState({
        listToDo: listToDoCopy,
        editTodo: {},
      });

      toast.success("Edit todo success!");

      return;
    }
    this.setState({
      editTodo: todo,
    });
  };

  handleOnChangeTitle = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listToDo, editTodo } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    return (
      <div className="list-todo-container">
        <AddTodo addTodo={this.addTodo} />
        <div className="list-todo-content">
          {listToDo &&
            listToDo.length > 0 &&
            listToDo.map((item, index) => {
              return (
                <>
                  <div className="todo-child">
                    {isEmptyObj === true ? (
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) => {
                                this.handleOnChangeTitle(event);
                              }}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <div className="action">
                      <input
                        type="submit"
                        value={
                          isEmptyObj === false && editTodo.id === item.id
                            ? "Save"
                            : "Edit"
                        }
                        className="btn-edit"
                        onClick={() => this.editOneTodo(item)}
                      />
                      <input
                        type="submit"
                        value="Delete"
                        className="btn-delete"
                        onClick={() => {
                          this.deleteOneTodo(item);
                        }}
                      />
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
