import axios from "axios";

axios
  .get("https://sms-spam-detector-ml.herokuapp.com/model/api/predict", {
    params: {
      review: "bro what are you doing today",
    },
  })
  .then(function (response) {
    console.log(response);
  });
