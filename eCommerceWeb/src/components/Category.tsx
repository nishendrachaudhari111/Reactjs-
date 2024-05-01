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

export const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((el) => (
          <CategoryCard
            key={el.id}
            img={el.img}
            name={el.name}
            count={el.count}
          />
        ))}
      </div>
    </div>
  );
};
