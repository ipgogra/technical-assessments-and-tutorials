import WeatherIndicator from '../WeatherIndicator/WeatherIndicator.js';

import './WeatherIndicatorGroup.css';

const WeatherIndicatorGroup = ({ data }) => {
  return (
    <div className="indicator-group">
      {data.map((dataDay, idx) => (
        <WeatherIndicator key={dataDay.date} today={idx === 0} data={dataDay} />
      ))}
    </div>
  );
};

export default WeatherIndicatorGroup;
