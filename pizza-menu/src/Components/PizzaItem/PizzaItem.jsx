export default function PizzaItem({ data }) {
  if (!data) return null;
  return (
    <li className={`pizza ${data.soldOut ? "sold-out" : ""}`}>
      <img src={data.url} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        <p>{data.ingredients}</p>
        <span>{data.soldOut ? "Sold out" : data.price}</span>
      </div>
    </li>
  );
}
