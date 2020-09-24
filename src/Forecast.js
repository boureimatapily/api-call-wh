import React from "react";
// import firebase from "./Config/fbconfig"
import { connect } from "react-redux";
import { dialy_Data, clim_Data } from "./redux/Actions/UserActions";

class Forecast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities_data: [],
      climacell_data: [],
    };
  }

  componentDidMount() {
    // this.getCities_api();
    // this.getClimacell_api()
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
        // console.log(response);
        this.setState({ cities_data: response });
        this.props.dialy_Data(response);
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
        this.props.clim_Data(this.state.climacell_data[0]);
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
          <div>{JSON.stringify(this.state.cities_data)}</div>
          <div>{JSON.stringify(this.state.climacell_data)}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect(null, { dialy_Data, clim_Data })(Forecast);
