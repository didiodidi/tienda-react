
import "../NavBar/NavBar.css";
import CartWidget from '../CartWidget/CartWidget'
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";



const NavBar = () => {
    
    return( 
        <nav className="nav-container">
            <div className="logo">
            <Link to={`./`} style={{textDecoration: "none", color:"black"}} >
                
                    <h1>Todo Deportes</h1> 
                
                    
            </Link>
           </div> 
           <div className="ul-li-container">
            <ul className="ul-li">    
                <li> <Link to={`/`}>Home</Link></li>
                <li><Link to={`/category/zapatillas`}>Zapatillas</Link></li>
                <li><Link to={`/category/remeras`}>Remeras</Link></li>
                <li><Link to={`/category/gorras`}>Gorras</Link></li>
                <CartWidget/>
            </ul>
           </div>
        </nav>
    );
} ;

export default NavBar;

