import React from "react";

const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${product.image}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div className="product-image p-2">
      <img
        src={imageurl}
        alt="photo"
        className="mb-3 rounded"
      />
    </div>
  );
};

export default ImageHelper;
