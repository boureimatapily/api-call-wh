import React from "react";
import {addData} from "./redux/Actions/userActions"
// import firebase from "./Config/fbconfig"
import { connect } from "react-redux";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

add=()=>{
  this.props.addData(this.state.data)
}
  getForecast = () => {
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?q=seattle",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "bf6a3aad0emsh48e9f2705dc53c9p1a103ejsne9dfd9c37fe6",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({data:response });
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log(this.state.data)
    return (
      <React.Fragment>

        <h2>Find Current Weather Conditions</h2>
        <div>
          {JSON.stringify(this.state.data)}
          {JSON.stringify(this.state.data)}
        
        </div>
        <button onClick={this.getForecast}>Get data</button>
        <button onClick={this.add}>Send</button>
      </React.Fragment>
    );
  }
}

export default connect(null, { addData }) (Forecast);
