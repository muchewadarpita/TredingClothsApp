import React from 'react';

interface ClothItemProps {
  cloth: {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    isWishlist: boolean;
    rating: number;
  };
  onWishlistClick: (id: number) => void;
}

const ClothItem: React.FC<ClothItemProps> = ({ cloth, onWishlistClick }) => {
  const { id, name, description, price, imageUrl, isWishlist, rating } = cloth;

  return (
    <div className="cloth-item">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: ${price}</p>
      <p>Rating: {rating}</p>
      <button
        className={isWishlist ? 'wishlist-btn active' : 'wishlist-btn'}
        onClick={() => onWishlistClick(id)}
      >
        Wishlist
      </button>
    </div>
  );
};

export default ClothItem;
