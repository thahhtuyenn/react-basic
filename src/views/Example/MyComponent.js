import { eventWrapper } from "@testing-library/user-event/dist/utils";
import ChildComponent from "./ChildComponent";
import React from "react";
import AddComponent from "./AddComponent";

/**
 * JSX --> return block
 * bắt buộc trả về 1 phần tử của html
 */

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "job1", title: "Developers", salary: 500 },
      { id: "job2", title: "Testers", salary: 350 },
      { id: "job3", title: "Project Manager", salary: 800 },
    ],
  };

  addNewJob = (job) => {
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });

    console.log("Check job: ", job);
  };

  deleteAJob = (job) => {
    let currentJob = this.state.arrJobs;
    currentJob = currentJob.filter((item) => item.id !== job.id);
    this.setState({
      arrJobs: currentJob,
    });
  };

  render() {
    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />
        <ChildComponent
          arrJobs={this.state.arrJobs}
          deleteAJob={this.deleteAJob}
        />
      </>
    );
  }
}

export default MyComponent;
