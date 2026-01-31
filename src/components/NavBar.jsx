import CartWidget from "./CartWidget"
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function NavBar({ categories }) {
    return (
        <div className="flex  bg-amber-500 h-24">
            <Link to="/" className="text-5xl">
                <img className="h-28 pl-5 object-contain block" src="/images/ShoppingPointNavBar.png" alt="LOGO" />
            </Link>
            <nav className="ml-auto flex gap-10 text-xl items-center">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn">Categorias</div>
                <ul className="dropdown-content bg-base-100 rounded-xl z-10 w-72 p-3 shadow-lg grid grid-cols-2 gap-2">
                    {categories.map(cat => (
                        <li key={cat.id} className="text-sm px-3 py-2 rounded-lg hover:bg-amber-400 hover:text-white transition cursor-pointer">
                            <Link to={`/category/${cat.name}`} className="block w-full">
                                {cat.name}
                            </Link>
                        </li>
                        ))}
                </ul>
                </div>
                <CartWidget />
            </nav>
        </div>
    )
}

export default NavBar