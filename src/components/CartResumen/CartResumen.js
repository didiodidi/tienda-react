import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import "./CartResumen.css";


const CartResumen = ({item}) => {
    const [cartItems, cantidadCarrito, addCart, removeItem, clear] = useContext(CartContext)

    const removeHandler = () => {
        removeItem(item.id)
    }



    return(
        
        <div className="cart-extract-content">
                
                <h2>Resumen</h2>
                <h4>Subtotal: $ {item.price*item.cantidad}</h4>
        </div>
        
    )
}

export default CartResumen