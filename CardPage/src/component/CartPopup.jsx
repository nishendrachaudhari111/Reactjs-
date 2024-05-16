import React from "react";

const CartPopup = ({ cartCount, onDecrement, onIncrement, onClose }) => {
  return (
    <div className="fixed top-25 right-20 bg-white p-10 rounded-md shadow-md w-40xl h-40xl">
      <p className="text-lg font-semibold">Items in Cart: {cartCount}</p>
      <div className="flex justify-between mt-2">
        <button onClick={onDecrement} className="text-red-500 hover:text-red-700">
          -
        </button>
        <button onClick={onIncrement} className="text-green-500 hover:text-green-700">
          +
        </button>
      </div>
      <button onClick={onClose} className="text-red-500 hover:text-red-700 mt-2">
        Close
      </button>
    </div>
  );
};

export default CartPopup;
