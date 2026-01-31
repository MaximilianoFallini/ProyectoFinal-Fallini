import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { createOrder } from "../firebase/db";

function CartContainer() {

  const { cart, removeOne, getTotal, clearCart } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const address = form.address.value;

    const buyer = { name, email, phone, city, address };

    createOrder(buyer, cart, Number(getTotal()));
  }

  if (cart.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl">🛒 Tu carrito está vacío</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* LISTA PRODUCTOS */}
      <div className="border rounded-lg p-4 flex flex-col h-[500px]">

        <h2 className="text-xl font-semibold mb-3">
          Productos en el carrito
        </h2>

        {/* SCROLL */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2">

          {cart.map(item => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-3"
            >

              <img
                src={item.url}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />

              <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p className="text-sm text-gray-600">
                  Precio unitario: ${item.price}
                </p>
              </div>

              <button
                onClick={() => removeOne(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                −
              </button>

            </div>
          ))}

        </div>

        {/* TOTAL FIJO */}
        <div className="border-t pt-4 mt-4">

          <h3 className="text-xl font-bold">
            Total: ${getTotal().toFixed(2)}
          </h3>

          {/* BOTÓN VACIAR CARRITO */}
          <button
            onClick={() => clearCart()}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mt-3"
          >
            Vaciar carrito
          </button>

        </div>

      </div>

      {/* FORMULARIO */}
      <div className="border rounded-lg p-4">

        <h2 className="text-xl font-semibold mb-4">
          Datos de envío
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input required
            id="name"
            type="text"
            placeholder="Nombre completo"
            className="border p-2 rounded"
          />

          <input required
            id="email"
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
          />

          <input required
            id="phone"
            type="tel"
            placeholder="Teléfono"
            className="border p-2 rounded"
          />

          <input required
             id="city"
            type="text"
            placeholder="Localidad"
            className="border p-2 rounded"
          />

          <input required
            id="address"
            type="text"
            placeholder="Dirección"
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700 mt-3"
          >
            Finalizar compra
          </button>

        </form>

      </div>

    </div>
  );
}

export default CartContainer;