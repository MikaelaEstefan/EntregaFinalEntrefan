import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { cantidadTotal} = useContext(CarritoContext)
  
  const carrito = "CartWidget.png"

  return (

    <Link to='../cart' className='CartWidget' >
      <img className='carrito' src={carrito} alt="Imágen del Carrito" />
      { cantidadTotal > 0 && <strong> {cantidadTotal} </strong> }
    </Link>
  )
}

export default CartWidget