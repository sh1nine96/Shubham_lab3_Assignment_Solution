import { WeatherAPI } from "./weatherAPI.js";
import { Utils, DEGREE_CELCIUS_SYMBOL } from "./utils.js";

class WeatherController {
  init() {
    this.addEventHandlers();
  }

  addEventHandlers() {
    const searchBarElement = document.querySelector(".search-bar");
    searchBarElement.param1 = this;
    searchBarElement.addEventListener("keypress", this.handlesearch);
  }

  handlesearch(event) {
    // console.log("key pressed: " + event.key);
    if (event.key == "Enter" || event.keyCode == 13) {
      const eventTarget = event.target;
      const userData = eventTarget.value;

      const weatherAPI = new WeatherAPI();
      let weatherControllerObj = eventTarget.param1;
      weatherAPI.invoke(userData).then((responseJSON) => {
        console.log("--------------");
        console.log(responseJSON);

        weatherControllerObj.updateUI(responseJSON);
      });
    }
  }

  updateUI(responseJSON) {
    let cityElement = document.querySelector(".weather .city");
    cityElement.innerText = `${responseJSON.name}, ${responseJSON.sys.country}`;

    let dateElement = document.querySelector(".weather .date");
    dateElement.innerText = Utils.formatDate();

    let tempElement = document.querySelector(".weather .temperature");
    tempElement.innerHTML = `${responseJSON.main.temp} ${DEGREE_CELCIUS_SYMBOL}`;

    let descriptionElement = document.querySelector(".weather .description");
    descriptionElement.innerText = `${responseJSON.weather[0].main}`;

    let lowHighElement = document.querySelector(".weather .low-hi");
    lowHighElement.innerHTML = `${responseJSON.main.temp_min} ${DEGREE_CELCIUS_SYMBOL} /
    ${responseJSON.main.temp_max} ${DEGREE_CELCIUS_SYMBOL}`;

    let humidityElement = document.querySelector(".weather .humidity");
    humidityElement.innerText = `humidity: ${responseJSON.main.humidity}%`;

    let windElement = document.querySelector(".weather .wind");
    windElement.innerText = `wind speed: ${responseJSON.wind.speed} km/h`;
  }
}

export { WeatherController };
