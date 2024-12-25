import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ResturantChain from "./../data/restaurantChains.json";
import Card from "./Card";
import { useState } from "react";

export default function TopResturants() {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    if (ResturantChain.length - 4 === slide) return false;
    setSlide(slide + 1);
  };
  const prevSlide = () => {
    if (slide === 0) return false;
    setSlide(slide - 1);
  };
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between py-3">
          <div className="text-[20px] font-bold">
            Top Resturants chain in Karachi
          </div>
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
        <div className="flex gap-4 overflow-hidden">
          {ResturantChain.map((resturantdata, index) => {
            return (
              <Card
                key={index}
                props={resturantdata}
                width={250}
                slide={slide}
              />
            );
          })}
        </div>
        <hr className="my-4 border-[1px]" />
      </div>
    </>
  );
}
