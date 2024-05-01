import ProductCard from "./ProductCard";


const data = [
  {
    id: 1,
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__5.webp",
    name: "Fresh Tomato",
    price: "$400",
  },
  {
    id: 2,
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__2.webp",
    name: "Crunchy Crisps",
    price: "$1200",
  },
  {
    id: 3,
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__3.webp",
    name: "Jewel Cranberries",
    price: "$300",
  },
  {
    id: 4,
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/product__4.webp",
    name: "Almond organic",
    price: "$1000",
  },
];

export const FeatureSectionBreackfast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center ">
        <div>
          <h3 className="font-medium text-2xl ">Breakfast & Dairy</h3>
          <p className="text-gray-600 mt-2">
          Buy best quality breakfast online from big-basket stop near you.
          </p>
        </div>

        <div className="space-x-4 mt-8 lg:mt-0 ">
          <button className="feature_btn ">Eggs & Dairy</button>
          <button className="text-gray-600 hover:text-accent ">
          Pizza
          </button>
          <button className="text-gray-600 hover:text-accent ">
          Snacks
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2 ">
        <div>
          <img
            className="w-full object-cover "
            src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/feature__2.webp"
            alt="Banner"
          />
        </div>

        {data.map((el) => (
          <ProductCard key={el.id} img={el.img} name={el.name} price={el.price} />
        ))}
      </div>
    </div>
  );
};
