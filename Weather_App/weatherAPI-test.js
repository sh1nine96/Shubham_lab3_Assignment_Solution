//  only for testing purpose

import { WeatherAPI } from "./weatherAPI.js";
// import fetch from "cross-fetch";
function testURLbuilder() {
  const weatherAPI = new WeatherAPI();
  weatherAPI.buildURL("agra");
}

function testAPI() {
  const weatherAPI = new WeatherAPI();
  let responseJSON = weatherAPI.invoke("agra").then((response) => {
    console.log("--------------");
    console.log(response);
  });
}

testURLbuilder();
testAPI();
