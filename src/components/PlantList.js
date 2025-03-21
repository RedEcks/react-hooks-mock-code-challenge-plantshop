import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantInfo}) {
  
  let plants = plantInfo.map((plant)=><PlantCard key={plant.id} plant={plant}/>)

  return (
    <ul className="cards">{plants}</ul>
  );
}

export default PlantList;
