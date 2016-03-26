import React from 'react';
import moment from '../../bower_components/moment/min/moment-with-locales';

function WeatherItem(props) {
  moment.locale('ru');
  const dateStr = moment(props.dt * 1000).format('LL').slice(0, -8);

  return <li key={props.key} className="weather-item" >
    <div className="weather-item__date" >
      <span className="weather-item__day">{dateStr}</span>
    </div>
    <div className="weather-item__image" >
      <img src={`http://openweathermap.org/img/w/${props.weather[0].icon}.png`} />
    </div>
    <div className="weather-item__prop">
      <span>{Math.round(props.main.temp)}</span>
      <span> °</span>
    </div>
    <div className="weather-item__prop">
      <span>{props.main.humidity} %</span>
    </div>
    <div className="weather-item__prop">
      <span>{Math.round((props.main.pressure * 100) / 133.322)} мм</span>
    </div>
  </li>;
}

export default WeatherItem;
