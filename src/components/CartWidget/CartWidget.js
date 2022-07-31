import React, { useContext } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const [cartItems, cantidadCarrito, addCart, removeItem, clear] = useContext(CartContext);
    
  return (
    <Link to="/cart" style={{display:"flex",alignItems:"center"}}>
        <ShoppingCartIcon/>
        <p>{cantidadCarrito()}</p>
    </Link>
  );
}

export default CartWidget;
