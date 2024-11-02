export default function Item({ item, onDeleteItem, onToggle }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggle(item.id)}
      ></input>
      <p className="itemText">
        <span className="quantity">{item.quantity}</span>{" "}
        <span>{item.description}</span>
      </p>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}