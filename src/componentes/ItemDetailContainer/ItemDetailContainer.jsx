import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc, collection } from 'firebase/firestore';
import { db } from '../../services/firebaseConfig';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { idItem } = useParams(); 

  useEffect(() => {
    setLoading(true);

    const collectionRef = collection(db, 'products');
    const docRef = doc(collectionRef, idItem); 

    getDoc(docRef)
      .then((response) => {
        if (response.exists()) {
          const data = response.data();
          const productAdapted = { id: response.id, ...data };
          setProduct(productAdapted);
        } else {
          console.log('Document does not exist');
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [idItem]);

  return (
    <div>
      {loading ? <p>Loading...</p> : <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;
