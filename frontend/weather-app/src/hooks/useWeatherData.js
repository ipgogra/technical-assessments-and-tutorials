import { useState, useEffect } from 'react';
import { API_KEY } from '../constants.js';

/**
 * The weather data comes with 8 3h forcast per day and we only care about one
 * per day. so we can use this function to filter only what we want.
 */
const isDesiredIndex = (_, i) => i % 8 === 0;

/**
 * Given the name of a city and an optional options object, produce a string
 * of the appropiate OpenWeatherMap API url to get the desired data.
 */
const createApiUrl = (city, { units = 'standard' }) => {
  return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${API_KEY}`;
};

/**
 * Custom hook that will produce the weather data for the given city, along
 * with a 'loading' boolean and an 'error' variable.
 * The data collected is from the openweathermap API
 * (https://openweathermap.org/), and it holds an array of 5 objects that
 * represent the weather in the current day and the next 4 days.
 *
 * @param {string} city - the name of a city.
 * @param {Object} options
 * @property {string} [options.units='standard'] - the units in which the min
 *                                      and max temperature will be displayed.
 *                                      (could be 'standard', 'metric' or
 *                                      'imperial')
 * @returns {Object} the return object has the following properties:
 * @property {string|null} error - A string with an error message if the
 *                                 request failed. Else null.
 * @property {boolean} loading - true if the request to the API has resolved
 *                               (successfully or failed). Else false.
 * @property {Object[]} data - an array of objects, each object represents a
 *                             day of weather data, and contains the following
 *                             properties:
 *                                 - date: the short weekday name for the day
 *                                         that is being represented.
 *                                 - icon: a string representing the icon to
 *                                         display according to the image name
 *                                         located in the "public/assets/images"
 *                                         folder.
 *                                 - min: the min temperature for that day.
 *                                 - max: the max temperature for that day.
 */
const useWeatherData = (city, options) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState();

  const apiUrl = createApiUrl(city, options);

  useEffect(() => {
    const getWeatherData = async () => {
      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          throw new Error(`The status of the response is: ${res.status}`);
        }
        const data = await res.json();

        const dataArr = data.list.filter(isDesiredIndex).map((d) => {
          const { dt_txt, main, weather } = d;

          const icon = weather[0].icon.slice(0, -1);
          const min = main.temp_min.toFixed();
          const max = main.temp_max.toFixed();
          const date = new Date(dt_txt).toLocaleDateString('en-US', {
            weekday: 'short',
          });

          return { date, max, min, icon };
        });

        setData(dataArr);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };
    getWeatherData();
  }, [apiUrl]);

  return {
    loading: isLoading,
    error,
    data,
  };
};

export { useWeatherData };
