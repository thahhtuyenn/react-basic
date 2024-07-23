import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

/**
 * JSX --> return block
 * bắt buộc trả về 1 phần tử của html
 */

class ChildComponent extends React.Component {
  state = {
    showJob: false,
  };

  handleShowHide = () => {
    this.setState({
      showJob: !this.state.showJob,
    });
  };

  handleOnClickDelete = (item) => {
    this.props.deleteAJob(item);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJob } = this.state;
    let check = showJob === true ? "showJob = true" : "showJob = false";
    return (
      <>
        {showJob === false ? (
          <div>
            <button onClick={() => this.handleShowHide()}>Show</button>
          </div>
        ) : (
          <>
            <div className="list-jobs">
              {arrJobs.map((value, index) => {
                return (
                  <div key={value.id}>
                    {value.title} - {value.salary} <></>{" "}
                    <span onClick={() => this.handleOnClickDelete(value)}>
                      x
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <button onClick={() => this.handleShowHide()}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

// const ChildComponent = (props) => {
//   console.log(">>>Check child props: ", props);
//   let { name, age, address, arrJobs } = props;
//   return (
//     <>
//       <div>
//         Child component {name} - {age} - {address}
//         <div className="list-jobs">
//           {arrJobs.map((value, index) => {
//             if (value.salary >= 500) {
//               return (
//                 <div key={value.id}>
//                   {value.title} - {value.salary}$
//                 </div>
//               );
//             }
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

export default ChildComponent;
