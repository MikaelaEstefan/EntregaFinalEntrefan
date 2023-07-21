import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosPorCategoria } from '../../asynmock'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

  const [productos, setProductos] = useState([]);
    const { idCategoria } = useParams();

    useEffect(() => {
        const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos;

        funcionProductos(idCategoria)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
    }, [idCategoria])

    return (
        <>
            <h2 style={{ textAlign: "center" }}> 
            {greeting}
            Mis productos </h2>
            <ItemList productos={productos} />
        </>
    )
  // return (
  //   <h2>
  //       {greeting}
  //   </h2>
  // )
}

export default ItemListContainer