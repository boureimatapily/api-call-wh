import React from "react";
import { addData } from "./redux/Actions/userActions";
// import firebase from "./Config/fbconfig"
import { connect } from "react-redux";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities_data: [],
      climacell_data: [],
      visual_crossing: [],
    };
  }

  add = () => {
    this.props.addData(this.state.data);
  };
  componentDidMount() {
    // this.getCities_api();
    // this.getClimacell_api()
    // this.getvisual_crossing_api();
  }
  getCities_api = () => {
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
        console.log(response);
        this.setState({ cities_data: response });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getClimacell_api = () => {
    fetch(
      "https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast?fields=precipitation&unit_system=si&lat=42.8237618&lon=-71.2216286",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "climacell-microweather-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "bf6a3aad0emsh48e9f2705dc53c9p1a103ejsne9dfd9c37fe6",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ climacell_data: response });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  getvisual_crossing_api = () => {
    fetch(
      "https://visual-crossing-weather.p.rapidapi.com/history?dayStartTime=8%253A00%253A00&contentType=csv&dayEndTime=17%253A00%253A00&shortColumnNames=false&startDateTime=2019-01-01T00%253A00%253A00&aggregateHours=24&location=Washington%252CDC%252CUSA&endDateTime=2019-01-03T00%253A00%253A00&unitGroup=us",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "visual-crossing-weather.p.rapidapi.com",
          "x-rapidapi-key":
            "bf6a3aad0emsh48e9f2705dc53c9p1a103ejsne9dfd9c37fe6",
        },
      }
    )
      .then((response) => {
        console.log(response);
        this.setState({visual_crossing: response});
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("hello");
    return (
      <React.Fragment>
        <div className="weather_all_cities">
          <h2>Find Current Weather Conditions for all cities</h2>
          <div>{JSON.stringify(this.state.visual_crossing)}</div>
          <div>{JSON.stringify(this.state.cities_data)}</div>
          <div>{JSON.stringify(this.state.climacell_data)}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { addData })(Forecast);
