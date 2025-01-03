import { useState } from "react";

export default function Random() {
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState(null);
  const [count, setCount] = useState(0);
  async function getProduct() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      const randomNum = Math.floor(Math.random() * data.length);
      const randomProduct = data[randomNum];
      setProduct(randomProduct.title);
      setImage(randomProduct.image);
    } catch (error) {
      console.log("Failed to fetch the product", error);
    }
    setCount((c) => c + 1);
  }

  return (
    <div className="product-container">
      <h1>{product}</h1>
      <img src={image} alt="Image" />
      <p>You have seen {count} Product</p>
      <button onClick={getProduct}>Generate Random Products</button>
    </div>
  );
}
