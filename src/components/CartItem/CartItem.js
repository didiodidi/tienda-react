import React, { useContext } from 'react'
import "./CartItem.css"
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { CartContext } from '../../context/CartContext';



const CartItem = ({item}) => {
    const [cartItems, cantidadCarrito, addCart, removeItem, clear] = useContext(CartContext)


    const removeHandler = () => {
        removeItem(item.id)
        console.log("eliminar")
    }
    return (
        <div className="content-cart">
        <img src={item.img} alt={item.name} />
            <div className="content-cart-text">
                <h4> <u>Nombre del producto:</u></h4>
                <h4><i>{item.name}</i></h4>
                <h4>Precio unitario:${item.price}</h4>
                <h4> <u>Cantidad de productos:</u><i>{item.cantidad}</i></h4>
                <h4><u>Sub Total:</u> ${item.cantidad*item.price} </h4>

            </div>
            
            {/* <h4>Subtotal: $<span>{item.price*item.cantidad}</span></h4> */}
            <div>
                <DeleteRoundedIcon className="content-cart-icon" onClick={removeHandler} />
            </div>
            
        </div>
      
    )
}

export default CartItem
