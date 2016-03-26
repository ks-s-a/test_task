import React from 'react';
import AbstractComponent from '../components/AbstractComponent.jsx';
import WeatherItem from '../components/WeatherItem.jsx';
import WeatherStore from '../stores/WeatherStore';
import WeatherActionCreator from '../creators/WeatherActionCreator';

class Weather extends AbstractComponent {
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
    const items = this.state.forecast
      .filter(item => 
        (new Date(item.dt * 1000)).getHours() === 18
      )
      .map((item, i) => {
        item.key = i;

        return <WeatherItem {...item} />
      })

    return <div className="weather" >
        <h1 className="weather__header" >Прогноз погоды в Москве: </h1>
        <ul className="weather__cols" >
          {items}
        </ul>
      </div>;
  }
}

export default Weather;
