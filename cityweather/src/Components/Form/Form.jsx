export default function Form({ cityName, setCityName }) {
  let getData = (e) => {
    e.preventDefault();
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
    </form>
  );
}
