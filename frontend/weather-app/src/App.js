import WeatherIndicatorGroup from "./components/WeatherIndicatorGroup/WeatherIndicatorGroup.js";
import ErrorDisplay from "./components/ErrorDisplay/ErrorDisplay.js";
import Loading from "./components/Loading/Loading.js";
import { useWeatherData } from "./hooks/useWeatherData.js";

import "./App.css";

function App() {
  const { data, loading, error } = useWeatherData("Toronto", {
    units: "metric"
  });

  return (
    <div className="app-container">
      {loading && <Loading />}
      {error && <ErrorDisplay error={error} />}
      {data && !error && <WeatherIndicatorGroup data={data} />}
    </div>
  );
}

export default App;
