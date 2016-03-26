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

    console.log('axios is: ', axios);

    // make your api call/ async stuff here
    // we use setTimeout for faking async behaviour here
    // setTimeout(() => {
    //   const items = ['Foo', 'Bar', 'Baz'];
    //   this.dispatch('weather:loadSuccess', items);
    //   // on error
    //   // this.dispatch('items:loadError', error);
    // }, 500);
  }
}

const instance = new WeatherActionCreator();

export default instance;
