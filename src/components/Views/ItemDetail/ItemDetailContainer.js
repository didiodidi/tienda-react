import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import { Box, Grid } from "@mui/material";
//Components
import "../ItemDetail/ItemDetail.css";
//import { getById } from "../../../data/data";
import ItemDetail from "../../Items/ItemDetail/ItemDetail";
import { getProductosXId } from "../../../firebase/firebaseFunciones";



const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  let { id } = useParams();
  
  useEffect(() => {

    
    getProductosXId(id)
    .then(respuesta => setItem(respuesta))
  }, []);
  
  return (
    <>
    <div className="itemList-container">
        <ItemDetail data={item}/>
    </div>
    </>
  );
};

export default ItemDetailContainer;
