/**
 * WeatherStore example
 *
 * @exports WeatherStore singleton
 */

import AbstractStore from '../stores/AbstractStore';

/**
 * @inheritdoc
 */
export default class WeatherStore extends AbstractStore {
  /**
   * @inheritdoc
   */
  getActionListeners() {
    return {
      /**
       * Load start
       */
      'weather:loadStart': () => {
        this
          .set('loading', true)
          .set('error', null)
          .set('weather', {})
          .trigger('change');
      },
      /**
       * Load success
       *
       * @param {array} items Items
       */
      'weather:loadSuccess': weather => {
        this
          .set('loading', false)
          .set('error', null)
          .set('weather', weather)
          .trigger('change');
      },
      /**
       * Load error
       *
       * @param {Error} error Error
       */
      'weather:loadError': error => {
        this
          .reset()
          .set('error', error)
          .trigger('change');
      },
    };
  }
}

const instance = new WeatherStore();

export default instance;
