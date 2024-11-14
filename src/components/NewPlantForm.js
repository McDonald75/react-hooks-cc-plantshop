import React, { useContext, useState } from "react";
import { Context } from "./context";

function NewPlantForm() {
  const {values, setValues, setInitValues, setRefresh} = useContext(Context)
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0)
  // soemthing

  const onSubmit  = (e)=>{
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        image,
        price
      }),
    }).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); 
    })
    .then(data => {
      const newlist = values.push(data)
      console.log('new list',values)
      setRefresh(true)
      alert('plant submitted!')
    })
    .catch(error => {
      alert(error.message)
    });
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name"  onChange={(e)=>{
          const v = e.target.value
          setName(v)
        }}/>
        <input type="text" name="image" placeholder="Image URL" onChange={(e)=>{
          const v = e.target.value
          setImage(v)
        }} />
        <input type="number" name="price" step="0.01" placeholder="Price"  onChange={(e)=>{
          const v = e.target.value
          setPrice(v)

        }}/>
        <button type="submit" onClick={onSubmit}>Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
