/**
 * Weather actions
 *
 * @exports WeatherActionCreator singleton
 */

import AbstractActionCreator from '../creators/AbstractActionCreator';

class WeatherActionCreator extends AbstractActionCreator {
  /**
   * Load weather
   */
  loadWeather(cityName) {
    this.dispatch('weather:loadStart');

    fetch('http://api.openweathermap.org/data/2.5/forecast?appid=12e6bebc6b8d7c39f1c4946a2ccae9ee&lang=ru&units=metric&mode=json&q=' + cityName)
      .then(function(response) {
        return response.json();
      })
      .then(weather => {
        this.dispatch('weather:loadSuccess', weather);
      });
  }
}

const instance = new WeatherActionCreator();

export default instance;
