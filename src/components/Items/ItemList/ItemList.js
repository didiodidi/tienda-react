
import { Box, Grid } from "@mui/material";
import "./ItemList.css";
import ItemCard from "../Item/ItemCard";

const ItemList = ({data}) => {
  //La logica de mi programa siempre se encuentra antes del return y despues de declarar mi ItemList
  console.log('data:', data)
  //Crear un grid
  return (
    <div>
        <h1 style={{textAlign:"center", marginTop:20}}>Users</h1>
      <div className="container">

        <Grid container>
          {data.map((item) => (
            <Grid key={item.id} item xs= {2} sm={4} md={4}>
                <Box margin={3}>
                  <ItemCard data={item} />
                </Box>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );

  
};

export default ItemList;
