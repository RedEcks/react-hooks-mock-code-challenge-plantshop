import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

//1. Render plants. Use map to render different plant links. Use useEffect and fetch 
//2. Add new plant by POST. Need to manage form using State
//3. Use state to mark plant as sold out using State 
//4. Use filter to find plants by name 

function App() {
  const [plantInfo,setplantsInfo] = useState([])
  const [search, setSearch]=useState("")

  function handleAddPlant(newPlant){
    let plants = [...plantInfo,newPlant];
    setplantsInfo(plants)
  }

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
      .then((response)=>response.json())
      .then((data)=>setplantsInfo(data))
  },[])
  let results = plantInfo.filter((plant)=>plant.name.includes(search))
  return (
    <div className="app">
      <Header />
      <PlantPage setSearch={setSearch} handleAddPlant={handleAddPlant} setplantsInfo={setplantsInfo} plantInfo={results} />
    </div>
  );
}

export default App;
