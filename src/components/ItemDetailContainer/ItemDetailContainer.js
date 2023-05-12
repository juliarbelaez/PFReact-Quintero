import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import { Navigate } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    setTimeout(() => {
      getDoc(docRef)
        .then((response) => {
          if (response.exists()) {
            const data = response.data();
            const productsAdapted = { id: response.id, ...data };
            setProduct(productsAdapted);
          } else {
            throw new Error("Producto no encontrado");
          }
        })
        .catch((error) => {
          console.error(error);
          setProduct(null);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500);
  }, [itemId]);

  if (loading) {
    return (
      <div className="CartDetailMsn">Cargando detalle del producto...</div>
    );
  }

  if (!product) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};

export default ItemDetailContainer;
