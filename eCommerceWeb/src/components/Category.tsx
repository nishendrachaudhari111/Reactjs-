import React, { useState } from "react";
import { CategoryCard } from "./CategoryCard";

const data = [
  {
    id: 1,
    name: "Fresh Fruits",
    count: "9 Products",
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__1.webp",
  },
  {
    id: 2,
    name: "Fresh Vegs",
    count: "8 Products",
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__2.webp",
  },
  {
    id: 3,
    name: "Canned Goods",
    count: "12 Products",
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__3.webp",
  },
  {
    id: 4,
    name: "Bread & Bakery",
    count: "20 Products",
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__4.webp",
  },
  {
    id: 5,
    name: "Fishes",
    count: "7 Products",
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__5.webp",
  },
  {
    id: 6,
    name: "Eggs & Dairy",
    count: "8 Products",
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__6.webp",
  },
  {
    id: 7,
    name: "Soft Drinks",
    count: "15 Products",
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__7.webp",
  },
  {
    id: 8,
    name: "Fresh Fruits",
    count: "11 Products",
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/category__1.webp",
  },
];

// Define a type for the items
type ItemType = {
  id: number;
  name: string;
  count: string;
  img: string;
};

export const Category = () => {
  // State to manage the cart items
  const [cartItems, setCartItems] = useState<ItemType[]>([]);

  // Function to add item to the cart
  const addToCart = (item: ItemType) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove item from the cart
  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((el) => (
          <div key={el.id}>
            <CategoryCard
              img={el.img}
              name={el.name}
              count={el.count}
            />
            <div className="flex justify-between mt-2">
              <button
                onClick={() => addToCart(el)}
                className="bg-accent hover:bg-accentDark text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 sm:py-3 cursor-pointer"
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromCart(el.id)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Cart</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
