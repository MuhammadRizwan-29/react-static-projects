export default function Result({ weatherData, setWeatherData }) {
  return (
    <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px] rounded shadow-[0_0_10px_0_rgba(256,256,256,0.4)]">
      {weatherData !== undefined ? (
        <>
          <h3 className="font-bold text-[30px]">
            {weatherData.name}{" "}
            <span className="bg-[yellow]">{weatherData.sys.country}</span>
          </h3>
          <div className="border-b border-green-500 flex items-center justify-between py-2">
            <h4 className="w-[70%] font-bold text-[17px]">
              <b className="italic">Temperature:</b>
            </h4>
            <span className="w-[30%] font-bold text-[17px] text-right">
              {weatherData.main.temp}
              <sup>o</sup> C
            </span>
          </div>
          <div className="border-b border-green-500 flex items-center justify-between py-2">
            <h4 className="w-[70%] font-bold text-[17px]">
              <b className="italic">Feel like:</b>
            </h4>
            <span className="w-[30%] font-bold text-[17px] text-right">
              {weatherData.main.feels_like}
              <sup>o</sup> C
            </span>
          </div>
          <div className="border-b border-green-500 flex items-center justify-between py-2">
            <h4 className="w-[70%] font-bold text-[17px]">
              <b className="italic">Humidity:</b>
            </h4>
            <span className="w-[30%] font-bold text-[17px] text-right">
              {weatherData.main.humidity}
            </span>
          </div>

          <div className="border-b border-green-500 flex items-center justify-between py-2">
            <h4 className="w-[70%] font-bold text-[17px]">
              <b className="italic">Pressure:</b>
            </h4>
            <span className="w-[30%] font-bold text-[17px] text-right">
              {weatherData.main.pressure}
              <i>km/h</i>
            </span>
          </div>
          <div className="border-b border-green-500 flex items-center justify-between py-1">
            <img
              src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
          <div className="py-2">
            <p className="italic capitalize font-medium">
              {weatherData.weather[0].description}
            </p>
          </div>
        </>
      ) : (
        "No data Founded"
      )}
    </div>
  );
}
