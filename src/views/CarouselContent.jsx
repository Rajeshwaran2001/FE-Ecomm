import React from "react";
import { data } from "../data";



const CarouselContent = () => {
  const iconProducts = data.iconProducts;
  const rows = [...Array(Math.ceil(iconProducts.length / 4))];
  // chunk the products into the array of rows
  const productRows = rows.map((row, idx) =>
    iconProducts.slice(idx * 4, idx * 4 + 4)
  );
  return (
    productRows.map((row, idx) => (
      <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
        <div className="row g-3">
        </div>
      </div>
    ))
  )
}

export default CarouselContent