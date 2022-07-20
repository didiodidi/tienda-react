import { db } from "./firebaseConfig";
import { collection, query, where, getDocs, doc, getDoc, addDoc } from "firebase/firestore";

export const getAllproductos = async (categoria) => {

    let q = null;

    if(categoria === undefined){
      q = query(collection(db, "productos"));// me trae los proctos
    }else{
      q = query(collection(db, "productos"), where("category", "==", categoria));// Me trae los productos por categoria que le paso por parametro 
    }

    const querySnapshot = await getDocs(q);

    let productos = [];

    querySnapshot.forEach((doc) => {      
      productos.push( {...doc.data(), id:doc.id} );     
    });
    

    return productos;
}


export const getProductosXId = async (id) => {
  const docRef = doc(db, "productos", id);// Arma la petición (?)
  const docSnap = await getDoc(docRef);// Ejecuta la busqueda de ese documento


  if (docSnap.exists()) { 
    return { ...docSnap.data(), id: id }; // Pregunta si el documento que solicite existe en la base de datos
  }

  return {};
};

export const agregarCompra = async (buyer, items, total) => {
  // Add a new document with a generated id.
  let date = new Date()
  const docRef = await addDoc(collection(db, "compras"), {
    buyer,
    items,
    date,
    total,
  });

  return docRef.id;
};