import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

/**
 * JSX --> return block
 * bắt buộc trả về 1 phần tử của html
 */

class MyComponent extends React.Component {
  state = {
    name: "ThanhTuyen",
    age: 21,
    phone: "0396172224",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    let name = "Lui Lui";

    return (
      <div className="container">
        <div>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
        </div>

        <div className="printName">
          <h3>
            Name: {this.state.name}, Age: {this.state.age}, Phone:{" "}
            {this.state.phone}
          </h3>
        </div>
      </div>
    );
  }
}

export default MyComponent;
