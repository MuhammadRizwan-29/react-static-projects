import Tabbed from "./components/Tabbed/Tabbed";
import data from "./data/data";

function App() {
  return (
    <div>
      <Tabbed content={data} />
    </div>
  );
}

export default App;
