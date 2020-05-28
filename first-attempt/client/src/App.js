import React from "react";
import Particles from "react-particles-js";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm.component";
import "./App.css";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
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
};

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <ImageLinkForm />
    </div>
  );
}

export default App;
