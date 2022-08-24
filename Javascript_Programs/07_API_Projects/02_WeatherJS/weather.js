class Weather {
  constructor(city, country) {
    this.apikey = "570af1b0d01cd8d06c42d2bf4a77c093";
    this.city = city;
    this.country = country;
  }

  // Fetch Weather from API
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apikey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change Weather Location
  changeLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
