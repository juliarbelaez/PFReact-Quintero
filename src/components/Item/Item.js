import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, price, stock, category, size }) => {
  return (
    <div class="product-card">
      <div class="badge">Nuevo</div>
      <div class="product-tumb">
        <img
          src={image}
          alt={name}
          className="ItemImg"
          width="350"
          height="350"
        />
      </div>
      <div class="product-details">
        <span class="product-catagory">{category}</span>
        <span class="product-catagory">{id}</span>

        <header className="Header">
          <h3 className="ItemHeader">{name}</h3>
        </header>
        <p>{size}</p>
        <h6>Stock:{stock}</h6>
        <div class="product-bottom-details">
          <div class="product-price">
            <small>${price * 1.19}</small>${price}
            <Link to={`/item/${id}`} className="Option">
              {" "}
              <button className="btn btn btn-primary" type="button">
                Ver detalle
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
