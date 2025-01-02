import PizzaItem from "../PizzaItem/PizzaItem";
import { pizzaData } from "./../../Data/data";

export default function Pizza() {
  const pizzadata = pizzaData;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {pizzadata.length > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzadata.map((data, index) => {
              return <PizzaItem data={data} key={index} />;
            })}
          </ul>
        </>
      ) : (
        <p>No data found 😥</p>
      )}
    </main>
  );
}
