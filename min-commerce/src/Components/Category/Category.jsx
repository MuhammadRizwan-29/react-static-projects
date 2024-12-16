export default function Category({ finalCategories, setCategoryName }) {
  return (
    <div>
      <h3 className="text-[25px] font-500 font-mono pb-4">Product Category</h3>
      <ul className="list-none">
        {finalCategories.map((value, index) => {
          return (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer text-[20px] font-mono font-[500] mb-2 capitalize rounded-[10px] shadow-[0px_2px_6px_0px_rgba(59,_130,_246,_0.5)]"
              onClick={() => setCategoryName(value)}
            >
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
