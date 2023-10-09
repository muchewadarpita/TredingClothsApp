import React, { useState } from 'react';
import ClothItem from './ClothItem';
import fakeData from '../data/fakeData';

const SearchBar: React.FC = () => {
    const [filter, setFilter] = useState('');
    const [cloths, setCloths] = useState(fakeData);

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value);
        const filteredCloths = fakeData.filter((cloth) =>
            cloth.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setCloths(filteredCloths);
    };

    const handleWishlistClick = (id: number) => {
        const updatedCloths = cloths.map((cloth) =>
            cloth.id === id ? { ...cloth, isWishlist: !cloth.isWishlist } : cloth
        );
        setCloths(updatedCloths);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for clothes..."
                value={filter}
                onChange={handleFilterChange}
            />
            <div className="cloth-list">
                {cloths.map((cloth) => (
                    <ClothItem key={cloth.id} cloth={cloth} onWishlistClick={handleWishlistClick} />
                ))}
            </div>
        </div>
    );
};

export default SearchBar;
