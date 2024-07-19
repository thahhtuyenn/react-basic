import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

/**
 * JSX --> return block
 * bắt buộc trả về 1 phần tử của html
 */

class ChildComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleChangeFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleChangeLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleClickSubmit = (event) => {
    event.preventDefault();
    alert(this.state.firstName + " " + this.state.lastName);
  };

  render() {
    return (
      <>
        <div>Child component {this.props.name}</div>
      </>
    );
  }
}

export default ChildComponent;
