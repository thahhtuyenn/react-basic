import React from "react";
import { toast } from "react-toastify";

class ChildTodo extends React.Component {
  handleClickDelete = (todo) => {
    this.props.deleteOneTodo(todo);
    toast.info("Deleted one to do.");
  };

  render() {
    let { listToDo } = this.props;
    return (
      <>
        <div className="list-todo-content">
          {listToDo &&
            listToDo.length > 0 &&
            listToDo.map((item, index) => {
              return (
                <>
                  <div className="todo-child">
                    <span>
                      {index + 1} - {item.title}
                    </span>
                    <div className="action">
                      <input type="submit" value="Edit" className="btn-edit" />
                      <input
                        type="submit"
                        value="Delete"
                        className="btn-delete"
                        onClick={() => {
                          this.handleClickDelete(item);
                        }}
                      />
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </>
    );
  }
}

export default ChildTodo;
