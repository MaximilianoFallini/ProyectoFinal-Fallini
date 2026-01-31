import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDetail } from "../firebase/db";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

  const [detail, setDetail] = useState();
  const { itemId } = useParams();

  useEffect(() => {
/*     fetch(`https://dummyjson.com/products/${itemId}`)
      .then(res => res.json())
      .then(data => setDetail(data)); */

      getDetail(itemId)
        .then(prod => {
          console.log("PRODUCTO FIREBASE:", prod)
          setDetail(prod)
        })
  }, [itemId]);

  return (
    <ItemDetail detail={detail} />
  )
}

export default ItemDetailContainer;
