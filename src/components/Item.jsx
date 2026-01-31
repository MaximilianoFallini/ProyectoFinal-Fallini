import { useNavigate } from "react-router";

function Item({ prod }) {
    const navigate = useNavigate();

    return (
        <div className="card bg-black shadow-sm">
          <figure className="h-48 overflow-hidden">
            <img
              src={prod.url}
              alt={`Product ${prod.category}`}
              className="w-full h-full object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{prod.name}</h2>
            <p>${prod.price}</p>
            <p>{prod.description}</p>
            <p>⭐{prod.rating}</p>
            <div className="card-actions justify-end">
              <button 
                className="btn btn-primary" onClick={() => navigate(`/item/${prod.id}`)}>Comprar
              </button>
            </div>
          </div>
        </div>
    )
}

export default Item;    