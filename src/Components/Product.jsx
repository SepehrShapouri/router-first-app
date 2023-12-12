import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
const products = [
  {
    id: 1,
    title: "shoes",
    body: "Nike jordan",
  },
  {
    id: 2,
    title: "shoes",
    body: "vans highs",
  },
  {
    id: 3,
    title: "shoes",
    body: "converse",
  },
];
function Product() {
  const {id} = useParams();
  const product = products.find(p=>p.id === Number(id))
  console.log(product)
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.body}</p>
      <Link to="/profile/products">Back to Products</Link>
    </div>
  );
}

export default Product;
