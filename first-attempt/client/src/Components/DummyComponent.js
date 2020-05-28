import React, { Component } from "react";
import Particles from "react-particles-js";

class DummyComponent extends Component {
  render() {
    return (
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
    );
  }
}
export default DummyComponent;
