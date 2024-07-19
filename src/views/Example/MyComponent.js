import { eventWrapper } from "@testing-library/user-event/dist/utils";
import ChildComponent from "./ChildComponent";
import React from "react";

/**
 * JSX --> return block
 * bắt buộc trả về 1 phần tử của html
 */

class MyComponent extends React.Component {
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
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleClickSubmit(event)}
          />
        </form>
        <ChildComponent name={"Child one"} />
        <ChildComponent name={"Child two"} />
        <ChildComponent name={"Child three"} />
      </>
    );
  }
}

export default MyComponent;
