import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

/**
 * JSX --> return block
 * bắt buộc trả về 1 phần tử của html
 */

// class ChildComponent extends React.Component {
//   render() {
//     let { name, age, address, arrJobs } = this.props;
//     return (
//       <>
//         <div>
//           Child component {name} - {age} - {address}
//           <div className="list-jobs">
//             {arrJobs.map((value, index) => {
//               return (
//                 <div key={value.id}>
//                   {value.title} - {value.salary}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </>
//     );
//   }
// }

const ChildComponent = (props) => {
  console.log(">>>Check child props: ", props);
  let { name, age, address, arrJobs } = props;
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
};

export default ChildComponent;
