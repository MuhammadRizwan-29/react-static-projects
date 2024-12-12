import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LC, NC, SC, UC } from "../../data/PassChar";

export default function Generator() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [incNumber, setIncNumber] = useState(false);
  let [incSymbol, setIncSymbol] = useState(false);

  let generatePassword = () => {
    let charSet = "";
    if (uppercase || lowercase || incNumber || incSymbol) {
      if (uppercase) charSet += UC;
      if (lowercase) charSet += LC;
      if (incNumber) charSet += NC;
      if (incSymbol) charSet += SC;
    } else {
      toast.error("Please select at least one option 😔");
    }
  };
  return (
    <div className="container mr-auto ml-auto p-4 flex items-center justify-center">
      <div className="w-[500px] pb-8 text-center border border-green-500 rounded-[15px] shadow-[0_0_5px_2px_rgba(0,128,0,0.5)] mt-8 p-3">
        <div className="text-center border-b border-green-500 pb-2">
          <h2 className="text-green-500 text-[25px] font-bold uppercase italic">
            Password Generator
          </h2>
        </div>

        <div className="py-4 flex border-b border-green-500">
          <input
            type="text"
            className="w-[80%] px-2 shadow-[0_0_4px_2px_rgba(0,128,0,0.5)] focus:outline-none"
            readOnly
          />
          <button className="px-4 py-1 bg-green-500 text-white w-[20%]">
            COPY
          </button>
        </div>

        <div className="py-4 flex border-b border-green-500 flex items-center justify-between">
          <label className="font-bold text-[14px] text-green-500 italic">
            Password Length
          </label>
          <input
            type="number"
            className="w-[20%] px-2 py-1 shadow-[0_0_4px_2px_rgba(0,128,0,0.5)] focus:outline-none"
          />
        </div>

        <div className="py-4 flex border-b border-green-500 flex items-center justify-between">
          <label className="font-bold text-[14px] text-green-500 italic">
            Include uppercase letters
          </label>
          <input
            type="checkbox"
            className="w-[10%] px-2 py-1 focus:outline-none"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>

        <div className="py-4 flex border-b border-green-500 flex items-center justify-between">
          <label className="font-bold text-[14px] text-green-500 italic">
            Include lowercase letters
          </label>
          <input
            type="checkbox"
            className="w-[10%] px-2 py-1 focus:outline-none"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>

        <div className="py-4 flex border-b border-green-500 flex items-center justify-between">
          <label className="font-bold text-[14px] text-green-500 italic">
            Include numbers
          </label>
          <input
            type="checkbox"
            className="w-[10%] px-2 py-1 focus:outline-none"
            checked={incNumber}
            onChange={() => setIncNumber(!incNumber)}
          />
        </div>

        <div className="py-4 flex border-b border-green-500 flex items-center justify-between">
          <label className="font-bold text-[14px] text-green-500 italic">
            Include symbols
          </label>
          <input
            type="checkbox"
            className="w-[10%] px-2 py-1 focus:outline-none"
            checked={incSymbol}
            onChange={() => setIncSymbol(!incSymbol)}
          />
        </div>

        <div className="pt-6">
          <butoon
            onClick={generatePassword}
            className="w-full block bg-green-500 text-white uppercase italic font-bold py-1 rounded-[5px] cursor-pointer"
          >
            Generate Password
          </butoon>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
