import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plantInfo, setplantsInfo, handleAddPlant, setSearch}) {
  return (
    <main>
      <NewPlantForm setplantsInfo={setplantsInfo} handleAddPlant={handleAddPlant} />
      <Search setSearch={setSearch} setplantsInfo={setplantsInfo} plantInfo={plantInfo}/>
      <PlantList plantInfo={plantInfo} />
    </main>
  );
}

export default PlantPage;
