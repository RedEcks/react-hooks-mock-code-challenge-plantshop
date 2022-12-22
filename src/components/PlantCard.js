import React, { useState } from "react";

function PlantCard({plant}) {

  const [stock, setInStock]=useState(true)
  const [edit, setEdit]=useState(true)

  function handleStock(){
    setInStock((stock) => !stock)
  }

  function handleEditSwitch(){
    setEdit((edit)=>!edit)
  }

  // function handlePatch(event){

  //   fetch(`http://localhost:6001/plants/${id}`,{
  //     method: 'PATCH',
  //     headers: {'Content-Type': 'application/json'},
  //     body: JSON.stringify({
  //         price: event.target.value
  //       })
  //     })
  //     .then(response=>response.json())
  //     .then(()=>handleEditSwitch())
  
  
  // }
  

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button onClick={handleStock} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      {edit ? (
        <button onClick={handleEditSwitch} className="Edit">Edit</button>
      ) : (
        <>
          <input type="text" name="new price" value="price" placeholder="New plant price" />
          <button onClick={handleEditSwitch}>Submit</button>
        </>
      )}
    </li>
  );
}

export default PlantCard;
