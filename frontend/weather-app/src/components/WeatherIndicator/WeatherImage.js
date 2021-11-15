import { WEATHER_ICON_DESCRIPTION } from '../../constants.js';

const WeatherImage = ({ id }) => {
  return (
    <div>
      <img src={`./assets/images/${id}.png`} alt={WEATHER_ICON_DESCRIPTION[id]} />
    </div>
  );
};

export default WeatherImage;
