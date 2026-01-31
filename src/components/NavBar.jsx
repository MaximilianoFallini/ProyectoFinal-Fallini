import CartWidget from "./CartWidget"
import { NavLink } from "react-router";
import logo from '../assets/ShoppingPointNavBar.png';

function NavBar({ categories }) {
    return (
        <div className="flex  bg-amber-500 h-24">
            <NavLink to="/" className="text-5xl">
                <img className="h-28 pl-5 object-contain block" src={logo} alt="LOGO" />
            </NavLink>
            <nav className="ml-auto flex gap-10 text-xl items-center">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn">Categorias</div>
                <ul className="dropdown-content bg-base-100 rounded-xl z-10 w-72 p-3 shadow-lg grid grid-cols-2 gap-2">
                    {categories.map(cat => (
                        <li key={cat.id} className="rounded-lg overflow-hidden">
                            <NavLink 
                                to={`/category/${cat.name}`} 
                                className={({ isActive }) => 
                                `block px-3 py-2 text-sm transition cursor-pointer ${isActive ? "bg-amber-500 text-white" : "text-white hover:bg-amber-400"}`
                                }
                            >
                                {cat.name}
                            </NavLink>
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