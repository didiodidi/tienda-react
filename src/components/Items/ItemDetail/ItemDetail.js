import React, { useContext } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../Item/Item.css"
import ItemCounter from "../ItemCounter/ItemCounter"
import { CartContext } from '../../../context/CartContext';



 function ItemDetail({data}) {

  const {img, name, price, description, stock} = data
  const [cartItems, cantidadCarrito, addCart, removeItem, clear] = useContext(CartContext)

  function onAdd(count){
    addCart(data,count)
  }
  return (
    <>
    
  <div className="card-container">
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="Usuarios"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  >
          {`Nombre: ${name}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Precio: ${price}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Descripcion: ${description}`}
        </Typography>
        <ItemCounter stock={stock} initial={1} onAdd={onAdd} />
      </CardContent>
    </Card>
  </div>
    </>
  );
}

export default ItemDetail;