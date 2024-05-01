
import { BsArrowRight } from "react-icons/bs";

export const Hero = () => {
  return (
    <div className="container pt-8 relative">
      <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-8">
        <div className="relative xl:col-span-2 first-line:xl:row-end-[-1]">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/hero__1.webp"
            alt="Hero image"
          />
          <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 ">
            <p className="text-2xl hidden sm:block">100% Original Dry Fruits </p>
            <h2 className="text-2xl sm:text md:text-6xl font-nold">Dried Fruits Best Quality</h2>
            <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
            <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 ph-4">$18.36</div>
            <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:py-6 sm:px-3 cursor-pointer">Shop Now<BsArrowRight /></div>
          </div>
        </div>
      </div>
      {/* Position the second image at the top-right side of the first image */}
      <div className="absolute top-0 right-0 mt-8 mr-8">
        <img
          className="w-300 h-300 object-cover rounded-lg"
          src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/hero__2.webp"
          alt="Second Hero Image"
        />
        <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 ">
          <h2 className="text-2xl sm:text md:text-2xl font-nold">Dried Fruits Best Quality</h2>
          <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
          <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 ph-4">$18.36</div>
          <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:py-3 sm:px-1 cursor-pointer">Shop Now<BsArrowRight /></div>
        </div>
      </div>
      {/* Position the third image below the second image */}
      <div className="absolute top-[calc(100% + 32px)] right-0 top-[25%] mr-8">
        <img
          className="w-300 h-300 object-cover rounded-lg"
          src="https://thebravecoders-ecommerce-website-react-tailwind.vercel.app/hero__3.webp"
          alt="Third Hero Image"
        />
        <div className="absolute max-w-[470px] sm:ml-16 ml-8 top-[50%] -translate-y-[50%] sm:space-y-4 ">
          <h2 className="text-2xl sm:text md:text-2xl font-nold">Best Yammy</h2>
          <p className="text-gray-500 text-xl pt-4 sm:pt-8">Starting At</p>
          <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-8 ph-4">$10</div>
          <div className="bg-accentDark hover:bg-accent text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:py-3 sm:px-1 cursor-pointer">Shop Now<BsArrowRight /></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
