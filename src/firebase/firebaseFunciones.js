import { db } from "./firebaseConfig";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";

export const getAllproductos = async (tipo = undefined) => {

    let q = null;

    if(tipo === undefined){
      q = query(collection(db, "productos"));
    }else{
      q = query(collection(db, "productos"), where("category", "==", tipo));
    }

    const querySnapshot = await getDocs(q);

    let productos = [];

    querySnapshot.forEach((doc) => {      
      productos.push( {...doc.data(), id:doc.id} );     
    });
    
    //console.log(productos)

    return productos;
}