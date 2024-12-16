import axios from "axios";
import "./App.css";
import Category from "./Components/Category/Category";
import Product from "./Components/Product/Product";
import { useEffect, useState } from "react";

function App() {
  let [finalCategories, setFinalCategories] = useState([]);
  let [finalSingleProduct, setFinalSingleProduct] = useState([]);
  let [categoryName, setCategoryName] = useState("");

  let getCategoriesData = () => {
    axios
      .get("https://dummyjson.com/products/category-list")
      .then((res) => res.data)
      .then((finalResponse) => setFinalCategories(finalResponse));
  };

  let getSingleProduct = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalResponse) => setFinalSingleProduct(finalResponse.products));
  };

  useEffect(() => {
    getCategoriesData();
    getSingleProduct();
  }, []);

  useEffect(() => {
    if (categoryName !== "") {
      axios
        .get(`https://dummyjson.com/products/category/${categoryName}`)
        .then((res) => res.data)
        .then((finalResponse) => setFinalSingleProduct(finalResponse.products));
    }
  }, [categoryName]);
  return (
    <div className="py-[40px]">
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-center mb-[30px] font-mono font-bold text-[30px] uppercase italic">
          <u>Our Products</u>
        </h1>
        <div className="grid grid-cols-[30%_auto] gap-[20px]">
          <div>
            <Category
              finalCategories={finalCategories}
              setCategoryName={setCategoryName}
            />
          </div>
          <div>
            <div className="grid grid-cols-3 gap-5">
              {finalSingleProduct.map((product, index) => {
                return finalSingleProduct.length >= 1 ? (
                  <Product key={index} product={product} />
                ) : (
                  "No data found"
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
