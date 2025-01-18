import  { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './CatImage.css';

const CatImage = ({ url, onFavoriteToggle }:any) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favoriteCats') || '[]') || [];
        setIsFavorite(favorites.includes(url));
    }, [url]);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const handleFavoriteToggle = () => {
        setIsFavorite((prev) => !prev);
        onFavoriteToggle(url);
    };

    return (
        <div
            className={`cat-image ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img style={{height:'100%'}} src={url} alt="Котик" />

            <div
                className={`heart-icon ${isFavorite ? 'active' : ''}`}
                onClick={handleFavoriteToggle}
            >
                {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
        </div>
    );
};

export default CatImage;