import React from 'react'
import "./CarritoVacio.css" //cmd +shift+h para extensión ruta relativa
import { Link } from 'react-router-dom'
const CarritoVacio = () => {
    return (
    <div className="carrito-contenedor">
        <div className="carrito-vacio">
            <h4>Carrito Vacío</h4>
            <div className="btn-comprar">
            <Link to={"/"}>
                <button>HOME</button>
            </Link>
            </div>
        </div>
    </div>     
    )
}

export default CarritoVacio
