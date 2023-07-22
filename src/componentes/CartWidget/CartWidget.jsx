import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { totalQuantity} = useContext(CartContext)
  
  const carrito = "CartWidget.png"

  return (

    <Link to='/cart' className='CartWidget' >
      <img className='carrito' src={carrito} alt="Imágen del Carrito" />
      { totalQuantity > 0 && <strong> {totalQuantity} </strong> }
    </Link>
  )
}

export default CartWidget