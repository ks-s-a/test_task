/**
 * Weather actions
 *
 * @exports WeatherActionCreator singleton
 */

import axios from '../../bower_components/axios/dist/axios.js'
import AbstractActionCreator from '../creators/AbstractActionCreator';

class WeatherActionCreator extends AbstractActionCreator {
  /**
   * Load weather
   */
  loadWeather() {
    this.dispatch('weather:loadStart');

    fetch('http://api.openweathermap.org/data/2.5/weather?q=Moscow,ru&appid=12e6bebc6b8d7c39f1c4946a2ccae9ee')
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
