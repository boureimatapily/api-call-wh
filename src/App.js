import React from "react";
import Forecast from "./Forecast";
// import TestScript from "./TestScript";


class App extends React.Component {
 

  render() {
    return (
      <React.Fragment>
        <Forecast />
        {/* <TestScript /> */}
      </React.Fragment>
    );
  }
}

export default App;
