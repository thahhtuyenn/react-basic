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
    let { name, age, address, arrJobs } = this.props;
    return (
      <>
        <div>
          Child component {name} - {age} - {address}
          <div className="list-jobs">
            {arrJobs.map((value, index) => {
              return (
                <div key={value.id}>
                  {value.title} - {value.salary}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ChildComponent;
