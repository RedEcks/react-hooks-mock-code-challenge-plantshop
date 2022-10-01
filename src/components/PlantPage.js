import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantInfo}) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plantInfo={plantInfo} />
    </main>
  );
}

export default PlantPage;
