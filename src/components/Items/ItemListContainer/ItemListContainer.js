import React, { useState, useEffect } from "react";
import { Box, Grid } from "@mui/material";
import { Link, useParams } from "react-router-dom";


//Components
import "../ItemListContainer/ItemListContainer.css";
import ItemCard from "../../Items/Item/ItemCard";
import { getAllproductos } from "../../../firebase/firebaseFunciones";


const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  let {categoria} = useParams();
  // console.log(genero)
  

  useEffect(() => {
  
    getAllproductos(categoria)
      .then(prod => {
        setItems(prod)
      })
      .catch(error => console.log(error))
    
  
    

      // setUsers: le paso a users toda la data de la API
  }, [categoria]);

  // console.log(items);


  
  //if (items == null ) return <p>CARGANDO....</p>  //ACA VA EL SPINNER

  return (
    <>
    
      {/* <ItemList data = {items} /> */}
      <div className="container">

       <Grid container>
        { items.length === 0 ? <p>Cargando............</p>  : items.map((item) => {
          return (
            <Grid key={item.id} item xs={8} sm={4} md= {4}>
              <Box margin={3} sx={{}}  >
                <Link
                  to={`/item/${item.id}`}
                  style={{ textDecoration: "none" }}>
                  <ItemCard data={item} />
                </Link>
              </Box>
            </Grid>
          );
        })}
      </Grid> 
      </div>
    </>
  );
};

export default ItemListContainer;
