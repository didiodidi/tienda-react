import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../Item/Item.css"



 function ItemCard({data}) {

  const {img, name, price} = data

  return (
    <>
    <div className="item-content">
    <div>
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="Productos"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div"  >
          {`Nombre: ${name}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Precio: ${price}`}
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    </>
  );
}

export default ItemCard;