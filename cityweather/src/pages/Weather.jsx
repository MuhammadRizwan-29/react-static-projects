import { useState } from "react";
import Form from "../Components/Form/Form";
import Result from "../Components/Result/Result";
import Title from "../Components/Title/Title";

export default function Weather() {
  let [cityName, setCityName] = useState("");

  return (
    <div className="w-[100%] h-[100vh] bg-green-500 px-4">
      <div className="max-w-[1280px] mx-auto">
        <Title />
        <Form cityName={cityName} setCityName={setCityName} />
        <Result />
      </div>
    </div>
  );
}
