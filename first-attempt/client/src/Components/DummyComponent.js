import React, { Component, Fragment } from "react";
import Particles from "react-particles-js";
import axios from "axios";

class DummyComponent extends Component {
  state = {
    classification: "Wait",
  };

  async componentDidMount() {
    let res = await axios.get(
      "https://sms-spam-detector-ml.herokuapp.com/model/api/predict",
      {
        params: {
          review: "claim+your+free+discount+today",
        },
      }
    );
    console.log(res.data);
    this.setState({
      classification: res.data,
    });
  }
  render() {
    return (
      <Fragment>
        <h1 style={{ color: "yellow", zIndex: 3 }}>
          {this.state.classification}
        </h1>
        <Particles
          params={{
            particles: {
              line_linked: {
                color: "#FFFFFF",
              },
              number: {
                value: 150,
              },
              size: {
                value: 5,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
          style={{
            width: "100%",
            background: `#000000`,
          }}
        />
      </Fragment>
    );
  }
}
export default DummyComponent;
