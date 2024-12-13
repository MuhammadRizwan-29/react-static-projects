import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Form({
  cityName,
  setCityName,
  weatherData,
  setWeatherData,
}) {
  let getData = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=21b12a5a494c1eebe543b2dba7cb1460&units=metrics`
    )
      .then((res) => res.json())
      .then((finalResponse) => {
        if (finalResponse.cod === "404") {
          toast.warning("Invalid city name 😞");
          setWeatherData(undefined);
        } else {
          setWeatherData(finalResponse);
        }
      });
    setCityName("");
  };

  return (
    <form onSubmit={getData}>
      <input
        type="text"
        className="w-[300px] h-[40px] pl-3 focus:outline-none rounded shadow-[0_0_10px_0_rgba(256,256,256,0.4)]"
        placeholder="Your's city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button className="bg-white px-8 py-2 mt-1 ml-2 font-bold text-green-500 rounded">
        Find
      </button>
      <ToastContainer />
    </form>
  );
}
