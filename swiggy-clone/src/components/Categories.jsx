import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CategoriesData from "./../data/category.json";

export default function Categories() {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    if (CategoriesData.length - 8 === slide) return false;
    setSlide(slide + 3);
  };
  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 3);
  };
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between py-3">
          <div className="text-[20px] font-bold">What's in your mind?</div>
          <div className="flex">
            <div
              onClick={prevSlide}
              className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer"
            >
              <FaArrowLeft />
            </div>
            <div
              onClick={nextSlide}
              className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer"
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden">
          {CategoriesData.map((v, i) => {
            return (
              <div
                style={{
                  transform: `translateX(-${slide * 100}%)`,
                }}
                key={i}
                className="w-[150px] shrink-0 duration-500"
              >
                <img src={v.image} alt={v.path} />
              </div>
            );
          })}
        </div>
        <hr className="my-4 border-[1px]" />
      </div>
    </>
  );
}
