import React from "react";
import { addData } from "./redux/Actions/userActions";
// import firebase from "./Config/fbconfig"
import { connect } from "react-redux";
import Forecast from "./Forecast"

class TestScript extends React.Component {


  componentDidMount() {
    Forecast.getCities_api();
    Forecast.getClimacell_api()
    Forecast.getvisual_crossing_api();
  }
 
  render() {
    // console.log( Forecast.getCities_api());
    // console.log( Forecast.getClimacell_api());
    //  console.log( Forecast.getClimacell_api());
    return (
      <React.Fragment>
        
      </React.Fragment>
    );
  }
}

export default connect(null, { addData })(TestScript);
