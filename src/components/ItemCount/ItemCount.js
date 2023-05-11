import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <div>
          <button type="button" className="btn btn-danger" onClick={decrement}>
            -
          </button>
        </div>
        <div>
          <h1>{quantity}</h1>
        </div>
        <div>
          <button type="button" className="btn btn-success" onClick={increment}>
            +
          </button>
        </div>
      </div>
      <div>
        <button
          type="button"
          className="btn btn btn-primary"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
