// Feature 1
let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let currentHours = now.getHours();
let currentMinutes = now.getMinutes();
let currentTime = `${currentHours}:${currentMinutes}`;

let todaysDate = document.querySelector("#current-time");
todaysDate.innerHTML = `${day} ${currentTime}`;

// Feature 2
function changeTemperature(response) {
  console.lot(response.data.temperature.current);
  let temperatureElement = document.querySelector("temp-number");
  let temperature = Math.round(response.data.temperature.current);
  temperatureElement.innerHTML = `${temperature}`;
}

function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let currentCity = document.querySelector("#current-city");
  currentCity.innerHTML = `${searchInput.value}`;

  let city = searchInput.value;
  let apiKey = "a45t665f20038ec30baod39c4be3ea8e";
  let unit = "metric";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${unit}`;

  function changeTemperature(response) {
    let tempElement = document.querySelector("#temp-number");
    let temperature = Math.round(response.data.temperature.current);
    tempElement.innerHTML = `${temperature}`;
  }

  axios.get(apiUrl).then(changeTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", changeCity);
