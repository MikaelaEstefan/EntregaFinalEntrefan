import './ItemDetail.css'
import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CartContext' 

const ItemDetail = ({ id, nombre, img, category, description, precio, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CarritoContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }

        addItem(item, quantity)

    }

    return (
        <article className='contenedorItem'>
            <header>
                <h2>Nombre: {nombre} </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p className='Info'>
                    Precio:{precio}
                </p>
                <h3>ID: {id} </h3>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'> Terminar Compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={10} funcionAgregar={handleOnAdd} /> 
                    )
                }
            </footer>
            
            
        </article>
    )
}

export default ItemDetail