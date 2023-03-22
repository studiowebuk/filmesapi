import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./pages/Home"
import Filme from "./pages/Filme"
import Header from './components/Header';
import Error from "./pages/Error/"
import Favoritos from './pages/Favoritos';

function RoutsApp(){
    return(
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path='primeflix/' element={ <Home/> } />
                <Route path='primeflix/filme/:id' element={ <Filme />} />
                <Route path='primeflix/favoritos' element={<Favoritos />} />
                <Route path='primeflix/*' element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutsApp;