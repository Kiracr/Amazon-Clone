import React from "react";
import { catagoryData } from "./catagoryData";
import CatagoryCard from "./CatagoryCard";
import "./catagory.css";

function Catagory() {
  return (
    <section className="catagory_container">
      {catagoryData.map((infos, i) => (
          <CatagoryCard data={infos} key={i}/>
      ))}
    </section>
  );
}

export default Catagory;
