import "./header.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <Link to='/primeflix' className="logo"> PrimeFlix</Link>
            <Link to='/primeflix/favoritos' className="favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header;