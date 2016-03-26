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
      * weather
      */
      weather : {},
      /**
      * forecast
      */
      forecast : [],
      /**
      * Loading state
      */
      loading: false,
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
      weather: WeatherStore.get('weather') || {},
      forecast: WeatherStore.get('weather').list || [],
      loading: WeatherStore.get('loading'),
    });
  }

  /**
   * @inheritdoc
   */
  componentDidMount() {
    super.componentDidMount();
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

    const citySubmit = (e) => {
      e.preventDefault();

      const cityName = this.refs.city.value;
      WeatherActionCreator.loadWeather(cityName);
    };

    return <div className="weather" >
        <div className="weather__city-choice" >
          <form onSubmit={citySubmit.bind(this)} >
            <input ref="city" className="weather__city-enter" />
            <button type="submit" className="weather__get-city" >Получить</button>
          </form>
        </div>
        {this.state.forecast.length ?
          <div>
            <h1 className="weather__header" >{this.state.weather.city.name}</h1>
            <ul className="weather__cols" >
              {items}
            </ul>
          </div> : ''
        }
      </div>;
  }
}

export default Weather;
