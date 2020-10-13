import React from "react";
import Header from "./header";


const Base = ({
  className = "text-white p-4 bg-white",
  children,
  counterData
}) => (
  <div>
  
    <div className="container-fluid p-0">
      <Header productCount = {counterData}></Header>
      <div className={className}>{children}</div>
    </div>
  </div>
);

export default Base;
