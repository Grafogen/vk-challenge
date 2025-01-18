import { useState, useEffect } from 'react';
import CatImage from './catImage/CatImage.tsx';
import './CatGallery.css';
import {CatInterface} from "../../types/catType.ts";

const CatGallery = () => {
    const [cats, setCats] = useState<CatInterface[]>([]);
    const [currentCount, setCurrentCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const limit = 20;

    const fetchCats = async ():Promise<CatInterface[]> => {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&offset=${currentCount}`);
        const data = await response.json();
        return data;
    };

    const loadMoreCats = async () => {
        setIsLoading(true);
        const newCats = await fetchCats();
        if (newCats.length > 0) {
            setCats((prevCats) => [...prevCats, ...newCats]);
            setCurrentCount((prevCount) => prevCount + limit);
        } else {
            alert('Больше котиков нет!');
        }
        setIsLoading(false);
    };

    const handleFavoriteToggle = (url:string) => {
        const favorites = JSON.parse(localStorage.getItem('favoriteCats') || '[]') || [];
        if (favorites.includes(url)) {
            // @ts-ignore
            const updatedFavorites = favorites.filter(fav => fav !== url);
            localStorage.setItem('favoriteCats', JSON.stringify(updatedFavorites));
        } else {
            favorites.push(url);
            localStorage.setItem('favoriteCats', JSON.stringify(favorites));
        }
    };

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
            loadMoreCats();
        }
    };

    useEffect(() => {
        loadMoreCats();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="container">
                {cats.map((cat, index) => (
                    <CatImage
                        url={cat.url}
                        key={index}
                        onFavoriteToggle={handleFavoriteToggle}
                    />
                ))}
            </div>
            {isLoading && <div className="loading-message">... загружаем еще котиков ...</div>}
        </div>
    );
};

export default CatGallery;