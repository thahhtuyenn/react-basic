import React from "react";

class AddTodo extends React.Component {
  state = {
    id: "",
    title: "",
  };

  handleChangeTodo = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = (event) => {
    event.preventDefault();
    if (!this.state.title) {
      alert("Missing required params!");
      return;
    }

    this.props.addTodo({
      id: Math.floor(Math.random() * 111),
      title: this.state.title,
    });

    this.setState({
      id: "",
      title: "",
    });
  };

  render() {
    return (
      <>
        <div className="add-todo">
          <input
            value={this.state.title}
            onChange={(event) => {
              this.handleChangeTodo(event);
            }}
            className=""
            type="text"
          />
          <input
            className="btn-add"
            type="button"
            value="Add"
            onClick={(event) => {
              this.handleAddTodo(event);
            }}
          />
        </div>
      </>
    );
  }
}

export default AddTodo;
