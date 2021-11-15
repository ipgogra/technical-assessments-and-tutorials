import "./TemperatureGroup.css"

const TemperatureGroup = ({ min, max }) => {
  return (
    <div className="temp-group">
      <p className="max-temp">{max}&deg;</p>
      <p>{min}&deg;</p>
    </div>
  );
};

export default TemperatureGroup;
