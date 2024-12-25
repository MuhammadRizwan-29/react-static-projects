import { FcRating } from "react-icons/fc";
import { MdOutlineDeliveryDining } from "react-icons/md";

export default function Card({ props, index, width, slide }) {
  return (
    <>
      <div
        style={{
          transform: `translateX(-${slide * 100}%)`,
        }}
        key={index}
        className={`w-[${width}px] shrink-0 grow`}
      >
        <div className="group relative h-[180px] overflow-hidden rounded-[15px]">
          <img
            className="group-hover:scale-110 duration-500 object-cover w-full h-full"
            src={props.image}
            alt={props.title}
          />
          <div className="overlay-color absolute w-full h-full top-0 flex items-end">
            <span className="text-white font-semibold p-2 tracking-tighter">
              {props.offer}
            </span>
          </div>
        </div>
        <div className="p-2">
          <h3 className="text-xl">{props.title}</h3>
          <div className="flex items-center justify-between text-[14px]">
            <span>
              <FcRating className="inline justify-center items-center mr-1 mt-[-2px] text-[20px]" />
              {props.rating}
            </span>
            <span>
              <MdOutlineDeliveryDining className="inline justify-center items-center mr-1 mt-[-2px] text-[20px]" />
              {props.minTime} - {props.maxTime} mins
            </span>
          </div>
          <div className="text-slate-600">
            {props.name} <br />
            {props.place}
          </div>
        </div>
      </div>
    </>
  );
}
