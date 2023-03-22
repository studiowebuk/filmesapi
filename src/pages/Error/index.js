import {Link} from "react-router-dom"
import "./error.css"

function Error(){
    return(
        <div className="not-found">
            <h1>404</h1>
            <h2>Pagina nao encontrada!</h2>
            <Link to="/primeflix">Veja todos os filmes!</Link>
        </div>
    )
}

export default Error;