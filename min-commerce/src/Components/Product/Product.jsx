export default function Product({ product }) {
  console.log(product);
  return (
    <div className="p-4 rounded-[10px] shadow-[0px_2px_16px_0px_rgba(59,_130,_246,_0.5)]">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-[100%] h-[230px]"
      />
      <h4 className="font-mono font-[700] text-[17px] leading-tight py-2">
        {product.title}
      </h4>
      <p className="font-serif leading-tight font-thin	 pb-2">
        {product.description}
      </p>
      <span className="font-serif">
        <b>Price:</b> ${product.price}
      </span>
      <span className="ml-2 font-serif">
        <b>Rating: </b> {product.rating}
      </span>
    </div>
  );
}
