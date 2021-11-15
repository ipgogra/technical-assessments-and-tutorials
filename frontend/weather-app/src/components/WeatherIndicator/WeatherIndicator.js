import WeekDay from './WeekDay/WeekDay.js';
import WeatherImage from './WeatherImage.js';
import TemperatureGroup from './TemperatureGroup/TemperatureGroup.js';

import './WeatherIndicator.css'

const WeatherIndicator = ({ data, today }) => {

  return (
    <div className={`indicator ${today ? 'today' : ''}`}>
      <WeekDay day={data.date} />
      <WeatherImage id={data.icon} />
      <TemperatureGroup min={data.min} max={data.max} />
    </div>
  );
};

export default WeatherIndicator;
