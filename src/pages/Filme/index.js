import { useEffect, useState } from "react";
import {useParams, useNavigate} from "react-router-dom";
import {toast} from "react-toastify"
import api from "../../services/api";
import "./filme.css"

function Filme(){
    const {id} = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            await api.get(`movie/${id}`, {
                params:{
                    api_key: "ecc42320fa85d4a5f555c2d00497f383",
                    language: "pt-BR",
                }
            })
            .then((response) =>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(() => {
                navigate("/", {replace: true});
                return;
            })
        }

        loadFilme();

        return () =>{
            console.log("Desmontado");
        }
    },[navigate, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");
        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme ja esta na lista!");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!"); 
    }


    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando filme...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliacao: {filme.vote_average.toFixed(1)}/10</strong>
            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="_blank" rel="noreferrer" href={`https://youtube.com/results?search_query=${filme.title} trailer`} alt={filme.overview}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme;