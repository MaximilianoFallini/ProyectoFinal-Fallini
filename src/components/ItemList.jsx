import Item from "./Item";

function ItemList({ items }) {
  return (
        <div className="grid grid-cols-4 p-10 gap-10">
            {items.map(prod => <Item key={prod.id} prod={prod} />)}
        </div>
  );
}

export default ItemList;
