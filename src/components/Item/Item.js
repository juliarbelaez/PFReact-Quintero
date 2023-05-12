import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, price, stock, category, size }) => {
  return (
    <div className="product-card">
      <div className="badge">Nuevo</div>
      <div className="product-tumb">
        <img
          src={image}
          alt={name}
          className="ItemImg"
          width="350"
          height="350"
        />
      </div>
      <div className="product-details">
        <span className="product-catagory">{category}</span>
        <span className="product-catagory">{id}</span>

        <header className="Header">
          <h3 className="ItemHeader">{name}</h3>
        </header>
        <p>{size}</p>
        <h6>Stock:{stock}</h6>
        <div className="product-bottom-details">
          <div className="product-price">
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
