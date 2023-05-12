import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, image, name, price, quantity, category }) => {
  const { removeItem } = useContext(CartContext);

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <main>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h2 className="d-flex justify-content-center mb-3">
              Realizar Compra
            </h2>
            <form id="procesar-pago" method="POST">
              <div id="carrito" className="form-group table-responsive">
                <table className="table" id="lista-compra">
                  <thead>
                    <tr>
                      <th scope="col">Imagen</th>
                      <th scope="col">Nombre</th>
                      <th scope="col">Categoría</th>
                      <th scope="col">Precio</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Sub Total</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <picture>
                          <img
                            src={image}
                            alt={name}
                            width="100"
                            height="100"
                            className="ItemImg"
                          />
                        </picture>
                      </td>
                      <td>{name}</td>
                      <td>{category}</td>
                      <td>$ {price},00</td>
                      <td>{quantity}</td>
                      <td>$ {price * quantity},00</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={handleRemove}
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="row justify-content-between">
                  <div className="col-md-6 mb-2">
                    <Link to="/">
                      <button className="btn btn btn-success">
                        Seguir comprando
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartItem;
