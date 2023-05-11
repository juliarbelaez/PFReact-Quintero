import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({
  id,
  name,
  image,
  category,
  description,
  price,
  stock,
  size,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
      image,
      category,
    };
    addItem(item, quantity);
  };

  return (
    <div class="genel">
      <div class="sepetim">
        <h1>
          {" "}
          <label id="kepe" for="sepet">
            X
          </label>{" "}
        </h1>
      </div>

      <div class="ust">
        <div id="rp-menu" class="responsive-menu"></div>
        <label id="openmenu" for="menuac">
          <i class="fa fa-bars" aria-hidden="true"></i>
        </label>
        <div class="sepet">
          <label for="sepet">
            <i class="fas fa-shopping-bag"></i>
          </label>
        </div>
      </div>
      <div class="icerik">
        <div class="sol">
          <h1>{name}</h1>
          <h6 className="detail">{id}</h6>
          <h6 className="detail">{category}</h6>
          <p>{description}</p>
          <h5>{size}</h5>
          <h6>
            Stock disponible: <strong> {stock} </strong>{" "}
          </h6>
          <div class="price">
            <strong>${price}</strong>
          </div>
          <div class="alacaklı">
            <footer>
              {quantityAdded > 0 ? (
                <Link to="/cart" className="Option">
                  <button type="button" className="btn btn btn-primary">
                    Terminar compra
                  </button>
                </Link>
              ) : (
                <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
              )}
            </footer>
          </div>
        </div>
        <div class="sag">
          <img
            src={image}
            alt={name}
            width="500"
            height="500"
            className="ItemImg"
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
