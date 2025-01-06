import Button from "../../Button/Button";

export default function Friend({ data, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === data.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={data.image} alt={data.name} />
      <h3>{data.name}</h3>
      {data.balance < 0 && (
        <p className="red">
          You owe {data.name} {Math.abs(data.balance)}€
        </p>
      )}
      {data.balance > 0 && (
        <p className="green">
          {data.name} owes you {Math.abs(data.balance)}€
        </p>
      )}
      {data.balance === 0 && <p>You & {data.name} are even</p>}
      <Button onClick={() => onSelection(data)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
