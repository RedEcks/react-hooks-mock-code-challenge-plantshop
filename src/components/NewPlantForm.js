import React,{useState} from "react";




function NewPlantForm({handleAddPlant}) {

  const [name, setName] = useState("")
  const [image,setImage] = useState("")
  const [price, setPrice] = useState("")

  function handleName(e){
    setName(e.target.value)
  }

  function handleImage(e){
    setImage(e.target.value)
  }

  function handlePrice(e){
    setPrice(e.target.value)
  }

  function handlePlantPost(event){
    event.preventDefault()
  
    fetch("http://localhost:6001/plants",{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          name: name,
          image: image,
          price: price
        })
      })
      .then(response=>response.json())
      .then((results)=>handleAddPlant(results))
  
  
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePlantPost}>
        <input type="text" name="name" onChange={handleName} value={name} placeholder="Plant name" />
        <input type="text" name="image" onChange={handleImage} value={image} placeholder="Image URL" />
        <input type="number" name="price" onChange={handlePrice} value={price} step="0.01" placeholder="Price" />
        <button type="submit" onSubmit={handlePlantPost}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
