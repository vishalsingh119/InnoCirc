import React, { useState, useEffect } from "react";
import "../styles.scss";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";
import { loadCart } from "./helper/cartHelper";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState([]);

  useEffect(() => {
    var arr= loadCart();
    if(arr){
      setCounter(arr.length);
    }
  }, []);

  const loadAllProduct = () => {
    getProducts().then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  const sortHigh = () =>{
    let sortedProducts = [...products];
    if(sortedProducts){
      var dataMina = sortedProducts.sort((a, b) => (b.price.actual - a.price.actual))
      setProducts(dataMina);
    }
  }
  const sortLow = () =>{
    let sortedProducts = [...products];
    if(sortedProducts){
      var dataMina = sortedProducts.sort((a, b) => (a.price.actual - b.price.actual))
      setProducts(dataMina);
    }
  }
  const sortDiscount = () =>{
    let sortedProducts = [...products];
    if(sortedProducts){
      var dataMina = sortedProducts.sort((a, b) => ( b.discount - a.discount))
      setProducts(dataMina);
    }
  }
  useEffect(() => {
    loadAllProduct();
  }, []);

  return (
    <Base counterData={counter}>
        <div className="row">
        <div className="sort-sec d-flex mb-3 col-12">
          Sort By-
          <div className="sort-item ml-4" onClick={sortHigh}>Price-- High Low</div>
          <div className="sort-item ml-4" onClick={sortLow}>Price-- Low High</div>
          <div className="sort-item ml-4" onClick={sortDiscount}>Discount</div>
        </div>
        </div>
        <div className="row">
          { products ? products.map((product, index) => {
            return (
              <div key={index} className="card-item">
                <Card product={product} />
                {/* {product.name} */}
              </div>
            );
          }) : false}
        </div>
    </Base>
  );
}
