import Navigation from "./components/headerComponent/Navigation.tsx";
import {Route, Routes} from "react-router";
import Cats from "./components/mainCats/Cats.tsx";
import FavoriteCats from "./components/favoriteCats/FavoriteCats.tsx";

function App() {


    return (
        <div>
            <Navigation/>
            <Routes>
                <Route index  element={<Cats/>} />
                <Route path='/favorites' element={<FavoriteCats/>} />
            </Routes>
        </div>
    )
}

export default App
