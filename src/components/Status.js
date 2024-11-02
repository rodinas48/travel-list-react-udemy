export default function Status({ items }) {
  const itemsNum = items.length;
  if (!items.length) {
    return <footer> Start adding some items to your packing list! ❤</footer>;
  }
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage = Math.round((packedItems / itemsNum) * 100) || 0;
  return (
    <footer>
      {packedPercentage === 100
        ? "You got everthing! Ready to go ✈"
        : `You have ${itemsNum} items in your list, and you already packed 
      ${packedItems} (${packedPercentage}%)`}
    </footer>
  );
}
