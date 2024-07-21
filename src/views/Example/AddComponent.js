import React from "react";
class AddComponent extends React.Component {
  state = {
    titleJob: "",
    salary: "",
  };
  handleChangeTitleJob = (event) => {
    this.setState({
      titleJob: event.target.value,
    });
  };

  handleChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleClickSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Job's title:</label>
          <br />
          <input
            type="text"
            value={this.state.titleJob}
            onChange={(event) => this.handleChangeTitleJob(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="number"
            value={this.state.salary}
            onChange={(event) => this.handleChangeSalary(event)}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handleClickSubmit(event)}
          />
        </form>
      </>
    );
  }
}

export default AddComponent;
