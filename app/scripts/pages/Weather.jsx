import React from 'react';
import AbstractComponent from '../components/AbstractComponent.jsx';
import WeatherStore from '../stores/WeatherStore';
import WeatherActionCreator from '../creators/WeatherActionCreator';

class Home extends AbstractComponent {
  /**
   * @inheritdoc
   */
  constructor(props){
    super(props);

    this.state = {
      /**
      * forecast
      */
      forecast : [],
      /**
      * Loading state
      */
      loading: false
    };
  }

  /**
   * @inheritdoc
   */
  getStoresConfig() {
    return [
      {
        store: WeatherStore,
        eventName: 'change',
        callback: this.storeChangeHandler.bind(this),
      },
    ];
  }

  /**
   * Weather store change handler
   */
  storeChangeHandler() {
    this.setState({
      forecast: WeatherStore.get('forecast'),
      loading: WeatherStore.get('loading'),
    });
  }

  /**
   * @inheritdoc
   */
  componentDidMount() {
    super.componentDidMount();
    
    WeatherActionCreator.loadWeather();
  }

  /**
   * @inheritdoc
   */
  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default Home;
