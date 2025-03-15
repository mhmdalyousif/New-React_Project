import React from "react";
import ProductsCard from "./ProductsCard";
import { productsdata } from "../api/api"; // Assuming you're getting data from here

const Products = ({ products }) => {  // ✅ props should be lowercase


  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black "></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptatem iste, tempora consectetur dicta quas molestias? Ratione
          temporibus natus ipsam repellat provident sit ex est dolores,
          assumenda, eveniet ut illo.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10">
        {products?.map((item) => (  // ✅ Fixed map function
          <ProductsCard key={item._id} product={item} />  // ✅ Pass `item` to the component
        ))}
      </div>
    </div>
  );
};

export default Products;
