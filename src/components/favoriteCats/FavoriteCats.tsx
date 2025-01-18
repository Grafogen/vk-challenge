import { useState, useEffect } from 'react';
import CatImage from '../mainCats/catImage/CatImage.tsx';
import './FavoriteCats.css';

const FavoriteCats = () => {
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem('favoriteCats')||'[]') || [];
        setFavorites(storedFavorites);
    }, []);

    const handleFavoriteToggle = (url: string) => {
        const updatedFavorites = favorites.filter(fav => fav !== url);
        localStorage.setItem('favoriteCats', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    return (
        <div>
            {favorites.length > 0 ? (
                <div className="container">
                    {favorites.map((url, index) => (
                        <CatImage
                            key={index}
                            url={url}
                            onFavoriteToggle={() => handleFavoriteToggle(url)}
                        />
                    ))}
                </div>
            ) : (
                <p>У вас нет любимых котиков.</p>
            )}
        </div>
    );
};

export default FavoriteCats;