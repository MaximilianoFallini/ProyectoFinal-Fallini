import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget () {
    const { getQuantity } = useContext(CartContext);
    const total= getQuantity();

    return (
        <Link to="/cart" className="bg-white text-black p-4 mr-5 rounded-2xl inline-block">
            Carrito {total}
        </Link>
    )
}

export default CartWidget;