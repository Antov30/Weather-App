let now = new Date();

let h2 = document.querySelector("h2");

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

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

h2.innerHTML = `${day} ${hours}:${minutes}`;
function getCurrentWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute("src");
}

function search(city) {
  let apiKey = "a9ce9e46c1cda5b3cfe7f2ec2a3bfb08";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getCurrentWeather);
}
function handleSumbit(event) {
  event.preventDefault();
  let city = document.querySelector("#searchCity").value;
  search(city);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSumbit);

function searchSpot(position) {
  let apiKey = "a9ce9e46c1cda5b3cfe7f2ec2a3bfb08";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(getCurrentWeather);
}

function searchCurrentSpot(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchSpot);
}

let currentSpotButton = document.querySelector("#current-location");
currentSpotButton.addEventListener("click", searchCurrentSpot);

search("Santiago");

let fahretheiConvert = document.querySelector("#fahrenheit");
fahretheiConvert.addEventListener("click", convertToFahrenheit);

function convertToFahrenheit(event) {
  event.preventDefault();
  let fahrenheitValue = (14 * 9) / 5 + 32;
  alert(fahrenheitValue);
}
