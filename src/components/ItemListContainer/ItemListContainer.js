import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    setTimeout(() => {
      getDocs(collectionRef)
        .then((response) => {
          const productsAdapted = response.docs.map((doc) => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          setProducts(productsAdapted);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 500);
  }, [categoryId]);

  return (
    <div className="">
      <div>
        <p className="parrafoPrincipal">
          Carmesí se fundó en el año 2020 después de varios años de pensar,
          planear y soñar un espacio y un lugar familiar donde se honre la
          tradición familiar, se continue y enaltezca el legado artesanal del
          municipio de El Carmen de Viboral. El equipo de trabajo Carmesí está
          conformado por mujeres artesanas del municipio, que a través de piezas
          y decoraciones contemporáneas se honrara y continuara con la tradición
          y legado artesanal del municipio a través de pintas y decoraciones
          modernas. Cada una de las mujeres que conforman el taller es una
          fuente de inspiración divina. Y con nuestro trabajo queremos
          conmemorar lo que somos, lo que construimos, logramos y creamos cuando
          estamos juntas.
        </p>
      </div>
      {loading ? (
        <div className="Loading">Cargando productos...</div>
      ) : (
        <div className="ItemListContainer">
          <ItemList products={products} />
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
