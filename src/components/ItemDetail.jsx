import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast, Bounce } from 'react-toastify';


function ItemDetail ({ detail }) {

  const navigate = useNavigate();

  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = () => addToCart({...detail, count})  // Agregar item y agrega propiedad count al item

    return (
        <div className="min-h-screen flex items-center justify-center px-10">

      <div className="bg-neutral-900 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl w-full bg-base-100 shadow-xl rounded-2xl p-10">

        {/* imagen */}
        <div className="flex justify-center items-center">
          {detail && (
            <img 
              src={detail.url}
              alt={detail.name}
              className="max-h-112.5 object-contain"
            />
          )}
        </div>

        {/* detalles */}
        <div className="flex flex-col justify-center gap-4">

          <h1 className="text-4xl font-bold">
            {detail?.name}
          </h1>

          <p className="text-gray-500 text-lg">
            {detail?.description}
          </p>

          <p className="text-3xl font-bold text-amber-500">
            {detail && `$${detail.price}`}
          </p>

          <p className="text-sm font-semibold">
            {detail && (
                detail.stock > 0 
                ? <span className="text-green-600">Stock disponible: {detail.stock}</span>
                : <span className="text-red-600">Sin stock</span>
            )}
          </p>

          <div className="flex gap-4 mt-6">
            <button 
              className="btn btn-primary px-8" 
              disabled={!detail}
              onClick={() => {
                handleAddToCart();
                toast.success('Producto agregado al carrito!', {
                  position: "bottom-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  theme: "light",
                  transition: Bounce,
                });
              }}
            >  
              🛒 Agregar al carrito
            </button>

              <button 
                className="btn btn-outline"
                onClick={() => navigate("/")}
              >
                Volver
              </button>
          </div>

        </div>

      </div>

    </div>
    );
}
export default ItemDetail;