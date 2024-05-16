import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./component/Page";
import Card from "./component/Card";
import { BsCart4 } from "react-icons/bs";
import CartPopup from "./component/CartPopup";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showCartPopup, setShowCartPopup] = useState(false);

  const toggleCartPopup = () => {
    setShowCartPopup(!showCartPopup);
  };

  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  const decrementCartCount = () => {
    if (cartCount > 0) {
      setCartCount((prevCount) => prevCount - 1);
    }
  };

  const incrementCartCount = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <Router>
      <div>
        <div className="fixed top-4 right-10">
          <BsCart4 className="text-2xl cursor-pointer" onClick={toggleCartPopup} />
          {showCartPopup && (
            <CartPopup
              cartCount={cartCount}
              onDecrement={decrementCartCount}
              onIncrement={incrementCartCount}
              onClose={toggleCartPopup}
            />
          )}
        </div>
        <Routes>
          <Route
            path="/"
            element={<Page addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/card"
            element={<Card addToCart={addToCart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
