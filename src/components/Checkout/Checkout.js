import logo from "../../components/NavBar/assets/logo.png";
import { useContext, useState } from "react";
import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { Timestamp } from "firebase/firestore";
import {
  writeBatch,
  collection,
  query,
  where,
  documentId,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, lastName, phone, email, address }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          lastName,
          phone,
          email,
          address,
        },
        items: cart,
        price: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "products");

      const producsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = producsAddedFromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const producsAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = producsAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clearCart();
      } else {
        console.error("Hay productos sin stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Se esta generando su orden...</h2>;
  }

  if (orderId) {
    return (
      <div className="invoice-card">
        <h5>Cerámicas Carmesí</h5>
        <h6>Nit: 10356286487-2</h6>
        <div className="invoice-title">
          <div id="main-title">
            <h4>Resumen de la compra</h4>
            <span>
              <img
                className="logo"
                src={logo}
                alt="Carrito de Compras"
                width={100}
                height={100}
              />
            </span>
          </div>
        </div>

        <div className="invoice-details">
          <table className="invoice-table">
            <thead>
              <tr>
                <td>Id de la compra</td>
                <td>Fecha</td>
              </tr>
            </thead>

            <tbody>
              <tr className="row-data">
                <td>{orderId}</td>
                <td>
                  {new Date().toLocaleDateString("es-ES", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </td>
              </tr>

              <tr className="calc-row">
                <td colspan="2">Total</td>
                <td>{total}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="invoice-footer">
          <p>Gracias por tu compra</p>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <p className="parrafoCheckout">
        Gracias por elegir apoyar a nuestro emprendimiento local. Su compra no
        solo nos ayuda a continuar creciendo, sino que también nos motiva a
        seguir mejorando y ofreciendo productos y servicios de alta calidad.
        Agradecemos su confianza en nosotros y esperamos seguir siendo su
        elección en el futuro. Si hay algo en lo que podamos ayudarle o si tiene
        alguna sugerencia para mejorar, no dude en hacérnoslo saber.
      </p>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
