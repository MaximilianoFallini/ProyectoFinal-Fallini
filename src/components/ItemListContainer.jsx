import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { withLoading } from "../hoc/withLoading";
import { getProducts, getProductsByCategory } from "../firebase/db";
import { useParams } from "react-router";

const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer() {

  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

    useEffect(() => {
      if (categoryName) {
        getProductsByCategory(categoryName)
          .then(prods => setItems(prods))
      } else {
        getProducts()
          .then(prods => setItems(prods))
      }
    }, [categoryName]);

  return <ItemListWithLoading isLoading={items.length < 1} items={items} />;
}

export default ItemListContainer;
