import  { useState, useEffect } from 'react';
import CatImage from './catImage/CatImage.tsx';
import './catsGallery.css';

const CatGallery = () => {
    const [cats, setCats] = useState([]);
    const [currentCount, setCurrentCount] = useState(0);
    const limit = 20;

    const fetchCats = async () => {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&offset=${currentCount}`);
        const data = await response.json();
        return data;
    };

    const loadMoreCats = async () => {
        const newCats = await fetchCats();
        if (newCats.length > 0) {
            // @ts-ignore
            setCats((prevCats) => [...prevCats, ...newCats]);
            setCurrentCount((prevCount) => prevCount + limit);
        } else {
            alert('Больше котиков нет!');
        }
    };

    useEffect(() => {
        loadMoreCats();
    }, []);

    return (
        <div>
            <div className="container">
                {cats.map((cat, index) => (
                    <CatImage url={cat.url} key={index} />
                ))}
            </div>
            <button onClick={loadMoreCats}>Загрузить ещё котиков</button>
        </div>
    );
};

export default CatGallery;