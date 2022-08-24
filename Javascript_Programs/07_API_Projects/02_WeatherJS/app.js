// Initialize Weather Object
const weather = new Weather("London", "uk");

const ui = new UI();

// Get Weather on DOM load
document.addEventListener("DOMContentLoaded", getWeather);

// weather.changeLocation("Tokyo", "Japan");

function getWeather() {
  weather
    .getWeather()
    .then((result) => {
      console.log(result);
      ui.paint(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
