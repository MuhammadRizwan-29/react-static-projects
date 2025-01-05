import { useState } from "react";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import PackagingList from "./Components/PackagingList/PackagingList";
import Stats from "./Components/Stats/Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Bag", quantity: 1, packed: true },
// ];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearAll() {
    console.log("Clear All");
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearAll={handleClearAll}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
