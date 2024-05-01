import { BlogCard } from "./BlogCard";


const data = [
  {
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/post__1.webp",
    title: "Healty Food Healthy Life",
    date: "may 1, 05, 2024",
    Comment: 4,
  },
  {
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/post__2.webp",
    title: "Healty Food Healthy Life",
    date: "may 1, 05, 2024",
    Comment: 12,
  },
  {
    img: "https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/post__3.webp",
    title: "Healty Food Healthy Life",
    date: "may 1, 05, 2024",
    Comment: 8,
  },
];
const Blog = () => {
  return (
    <div className="container pt-16">
      <h2 className="font-bold text-2xl ">Latest News</h2>
      <p className="text-gray-500 ">
        Present posts ia a best way to highlight interesting moments of your
        blog.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8 ">
        {data.map((el) => (
          <BlogCard
            key={el.date}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.Comment}
          />
        ))}
      </div>
    </div>
  );
};

export default Blog;
