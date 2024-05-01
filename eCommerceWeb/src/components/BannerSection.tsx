const BannerSection = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-8">
        <div className="overflow-hidden rounded-lg">
          <img
            className="hever:scale-105 transition-transform "
            src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/banner__1.webp"
            alt="Banner"
          />
        </div>
        <div className="overflow-hidden rounded-lg "> 
        <img
          className="hover:scale-105 transition-transform "
          src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/banner__2.webp"
          alt="Banner"
        />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
