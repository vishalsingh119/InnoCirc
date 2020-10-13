import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'

import "../styles.scss";

export default function Header({productCount}) {
  const history = useHistory();
  const [showResults, setShowResults] = useState(false)
  const handleOnSubmit = () => {
    history.push(`/cart`);
  };
  const homeOnSubmit = () => {
    history.push(`/`);
  };
  const showInput = () =>{
    setShowResults(true);
  }
  
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div class="logo" onClick={homeOnSubmit}>
          <i class="fa fa-star"></i>
        </div>
        <div className="d-flex align-items-center ml-auto">
          <ul className="d-flex list-inline ml-2 mb-0">
              <li className="d-flex list-inline-item">
                <div className="btn btn-xs btn-icon" onClick={showInput}>
                  <i className="fa fa-search" style={{color:"#fff"}}></i>
                </div>
                { showResults ? 
                <div class="input-wrapper"><input type="text" placeholder="Search Product" /></div> 
                : null }
                
              </li>
              <li className="list-inline-item">
                <div className="btn btn-xs btn-icon" onClick={handleOnSubmit}>
                  <i className="fa fa-shopping-cart" style={{color:"#fff"}}></i>
                  <span className="badge badge-pill badge-light">{productCount > 0 ? productCount : 0}</span>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </nav>
  )
}