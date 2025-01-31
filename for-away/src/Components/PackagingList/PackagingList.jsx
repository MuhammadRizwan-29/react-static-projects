import { useState } from "react";
import PackagingItem from "../PackagingItem/PackagingItem";

export default function PackagingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearAll,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <PackagingItem
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearAll}>Clear List</button>
      </div>
    </div>
  );
}
