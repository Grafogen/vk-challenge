import  { useState } from 'react';
import './CatImage.css';

const CatImage = ({ url }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);
    const handleClick = () => setIsClicked(!isClicked);

    return (
        <div
            className={`cat-image ${isHovered ? 'hovered' : ''} ${isClicked ? 'clicked' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <img src={url} alt="Котик" />
            {isHovered && <div className="dimensions">256 x 256</div>}
            {isClicked && <div className="heart">❤️</div>}
        </div>
    );
};

export default CatImage;