import './Cart.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { carrito, vaciarCarrito, cantidadTotal, total} = useContext(CarritoContext)

    if(cantidadTotal === 0) {
        return (
            <div>
                <h1> No hay items en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div>
            { carrito.map(producto => <CartItem key={producto.id} {...producto}/>)}
            <h3>Total: ${total}</h3>
            <h3>Cantidad Total : {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()} className='Button'>Limpiar Carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart