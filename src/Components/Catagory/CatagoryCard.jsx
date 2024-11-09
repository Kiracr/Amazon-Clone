import React from "react";
import "./catagory.css";
import { Link } from "react-router-dom";

function CatagoryCard({ data }) { 

  console.log(data.category)
  return (
    <div className="catagoryC">
      <Link to={`/category/${data.category}`}>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt="image" />
        <p>Shop Now</p>
      </Link>
    </div>
  );
}

export default CatagoryCard;
