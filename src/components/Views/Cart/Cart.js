import React, {useContext} from 'react';
import { CartContext } from '../../../context/CartContext'
import CartItem from '../../CartItem/CartItem';

//components
import '../Cart/CartStyle.css'

const Cart = () => {

    const [cartItems, cantidadCarrito, addCart, removeItem, clear] = useContext(CartContext)
    return (
        <div className="cart-container">
            <div>
                <h1>Carrito</h1>
            </div>
                <div>
                    { 
                      cartItems.map(item=>(
                          <CartItem key={item.id} item={item}/>
                      ))  
                    }
                </div>
                <div className="btn-comprar">
                <button>Comprar</button>
                <button>Vaciar Carrito</button>
                </div>
                
        </div>
    )
}

export default Cart
