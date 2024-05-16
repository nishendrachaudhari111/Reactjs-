import React from "react";
import Card from "./Card";

const Page = ({ addToCart, removeFromCart }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Fast Food Photos Card</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card
          title="Card 1"
          description="Fries and Burger on Plate"
          imageUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg"
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          index={0} // Pass the index of the card
        />
        <Card
          title="Card 2"
          description="Cheeseburger and Fries"
          imageUrl="https://images.pexels.com/photos/2725744/pexels-photo-2725744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          index={1} // Pass the index of the card
        />
        <Card
          title="Card 3"
          description="Two Potato Fries Packs"
          imageUrl="https://images.pexels.com/photos/1301373/pexels-photo-1301373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          index={2} // Pass the index of the card
        />
        <Card
          title="Card 4"
          description="Hamburger Beside Fries"
          imageUrl="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          index={3} // Pass the index of the card
        />
        <Card
          title="Card 5"
          description="CheeseBurger"
          imageUrl="https://images.pexels.com/photos/1199960/pexels-photo-1199960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          index={4} // Pass the index of the card
        />
        <Card
          title="Card 6"
          description="Closeup Photography of Bun With Cheese, Patty, Egg, and Bacon"
          imageUrl="https://images.pexels.com/photos/660282/pexels-photo-660282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          index={5} // Pass the index of the card
        />
      </div>
    </div>
  );
};

export default Page;




