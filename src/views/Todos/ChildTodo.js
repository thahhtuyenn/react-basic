import React from "react";

class ChildTodo extends React.Component {
  handleClickDelete = (todo) => {
    this.props.deleteOneTodo(todo);
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
                  <div className="todo-child" key={item.id}>
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
