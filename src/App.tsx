import Navigation from "./components/headerComponent/Navigation.tsx";
import {Route, Routes} from "react-router";
import FavoriteCats from "./components/favoriteCats/FavoriteCats.tsx";
import CatGallery from "./components/mainCats/Cats.tsx";

function App() {


    return (
        <div>
            <Navigation/>
            <Routes>
                <Route index  element={<CatGallery/>} />
                <Route path='/favorites' element={<FavoriteCats/>} />
            </Routes>
        </div>
    )
}

export default App
