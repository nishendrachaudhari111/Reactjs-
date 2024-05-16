import React, {useState} from "react";

const Card = ({ title, description, imageUrl, index, addToCart, removeFromCart  }) => {

  return (
    <div className="bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {index === 0 && (
        <img src={imageUrl} alt="Card" className="w-full mb-2 rounded-md" />
      )}
      {index === 1 && (
        <img src={imageUrl} alt="Card" className="w-full mb-2 rounded-md" />
      )}
      {index === 2 && (
        <img src={imageUrl} alt="Card" className="w-full mb-2 rounded-md" />
      )}
      {index === 3 && (
        <img src={imageUrl} alt="Card" className="w-full mb-2 rounded-md" />
      )}
      {index === 4 && (
        <img src={imageUrl} alt="Card" className="w-full mb-2 rounded-md" />
      )}
      {index === 5 && (
        <img src={imageUrl} alt="Card" className="w-full mb-2 rounded-md" />
      )}
      <p className="text-gray-700">{description}</p>
      <button
        onClick={addToCart}
        className="bg-green-400 hover:bg-green-600 text-white px-4 py-2 rounded-full mr-2"
      >
        Add to Cart
      </button>
      <button
        onClick={removeFromCart}
        className="bg-red-400 hover:bg-red-600 text-white px-4 py-2 rounded-full"
      >
        Remove
      </button>
    </div>
  );
};

export default Card;





