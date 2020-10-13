import React, { useState, useEffect } from "react";
import "../styles.scss";
import Base from "./Base";
import Card from "./Card";
import { loadCart } from "./helper/cartHelper";

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setProducts(loadCart());
  }, [reload]);

  const loadAllProducts = () => {
    return (
      <div className="row">
        {products.map((product, index) => (
        <div className="card-item">
          <Card
            key={index}
            product={product}
            removeFromCart={true}
            addtoCart={false}
            setReload={setReload}
            reload={reload}
          />
        </div>
        ))}
      </div>
    );
  };
  const loadCheckout = () => {
    return (
      <div className="row">
      </div>
    );
  };

  return (
    <Base title="Cart Page" description="Ready to checkout">
      <div className="row text-center">
        <div className="col-8">{loadAllProducts()}</div>
        <div className="col-4">Payment Section</div>
      </div>
    </Base>
  );
};

export default Cart;
