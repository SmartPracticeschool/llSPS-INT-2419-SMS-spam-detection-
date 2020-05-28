import React from "react";

import "./ImageLinkForm.styles.css";

const ImageLinkForm = () => (
  <div>
    <p className="f3">
      {"This Magic Brain will detect if the sms is a spam or not."}
    </p>

    <div className="center">
      <div className="form center pa4 br3 shadow-5">
        <input className="f4 pa2 w-70 center" type="text" />
        <button className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple">
          Detect
        </button>
      </div>
    </div>
  </div>
);

export default ImageLinkForm;
