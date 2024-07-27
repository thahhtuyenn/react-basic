import React from "react";

class ChildTodo extends React.Component {
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
                      <button className="btn-edit">Edit</button>
                      <button className="btn-delete">Delete</button>
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
