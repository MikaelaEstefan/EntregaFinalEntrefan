import React from 'react'
import { useState } from 'react'

const ItemCount = ({ initial, stock, funcionAgregar}) => {
    
    const [contador, setContador] = useState(initial);


    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > initial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
        <div>
            <button onClick={decrementar}> - </button>
            <p> {contador} </p>
            <button onClick={incrementar}> + </button>
        </div>
        <button onClick={() => funcionAgregar(contador)}> Agregar al Carrito</button>
        </>
    )
}


export default ItemCount