export default function Result() {
  return (
    <div className="w-[400px] mx-auto bg-white shadow-lg mt-[40px] p-[25px] rounded shadow-[0_0_10px_0_rgba(256,256,256,0.4)]">
      <h3 className="font-bold text-[30px]">
        Nawabsah <span className="bg-[yellow]">PK</span>
      </h3>
      <h2 className="font-bold text-[40px]">
        9.26<sup>o</sup>C
      </h2>
      <img src="http://openweathermap.org/img/w/50d.png" alt="Weather Icon" />
      <p>Fog</p>
    </div>
  );
}
