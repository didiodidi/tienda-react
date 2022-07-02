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
            <h4>Nombre del producto: <span>{item.name}</span></h4>
            <h4>Cantidad de productos <span>{item.cantidad}</span></h4>
            <h4>Subtotal: $<span>{item.price*item.cantidad}</span></h4>
            <DeleteRoundedIcon className="content-cart-icon" onClick={removeHandler} />
            
        </div>
      
    )
}

export default CartItem
