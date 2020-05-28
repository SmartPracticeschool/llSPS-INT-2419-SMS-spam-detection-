import React, { useState } from "react";
import axios from "axios";

import "./ImageLinkForm.styles.css";

const ImageLinkForm = () => {
  let [sms, setSms] = useState("");
  let [spam, setSpam] = useState("");

  let handleChange = (e) => {
    console.log(e.target.value);
    setSms(e.target.value);
  };

  let handleClick = async () => {
    let res = await axios.get(
      "https://sms-spam-detector-ml.herokuapp.com/model/api/predict",
      {
        params: {
          review: sms.replace(" ", "+"),
        },
      }
    );
    console.log(res.data);
    setSpam(res.data);
  };

  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect if the sms is a spam or not."}
      </p>

      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            name="sms"
            onChange={handleChange}
          />
          <button
            onClick={handleClick}
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          >
            Detect
          </button>
        </div>
      </div>

      <p className="f3">{spam}</p>
    </div>
  );
};

export default ImageLinkForm;
