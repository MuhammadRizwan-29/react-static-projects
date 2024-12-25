import ResturantChain from "./../data/restaurantChains.json";
import Card from "./Card";

export default function OnlineDelivery() {
  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between py-3">
          <div className="text-[20px] font-bold">
            Online Dekivery Resturants in Karachi
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {ResturantChain.map((resturantdata, index) => {
            return <Card width={300} key={index} props={resturantdata} />;
          })}
        </div>
      </div>
    </>
  );
}
