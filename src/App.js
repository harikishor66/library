// // import { Component } from "react";
// // import React, { Component } from "react";
// // import Displays from "./Displays";
// import React,{useState} from "react";
// export default class App extends Component {
//   //   state = {
//   //     name: "react state",
//   //     age: "26",
//   //     addres: "bangalore",
//   //   };
//   render() {
//     return (
//       <div>
//         <center>
//           <button>change</button>
//         </center>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <center>
        <h1> {count} </h1>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
      </center>
    </div>
  );
};
export default App;
