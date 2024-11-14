import React, { useContext, useEffect, useState } from "react";
import PlantCard from "./PlantCard";
import { Context } from "./context";

function PlantList() {
  const [loading, setLoading] = useState(true)
  const {values, setValues} = useContext(Context)
  const {initValues, setInitValues, refresh, setRefresh} = useContext(Context)
  const [error, setError] = useState()

  useEffect(()=>{
    fetch('http://localhost:6001/plants').then(res=>{
      return res.json()
    }).then(res=>{
      setValues(res)
      setInitValues(res)
    }).catch(err=>{
      setError(true)
    }).finally(()=>{
      setLoading(false)
    })
    return setRefresh(false)
  },[refresh])
  return (
    <ul className="cards">
      {loading && <>loading...</>}
      {error && <>Error!</>}
      {
        values.map(plant=>{
          return(
            <PlantCard key={plant.id} plant={plant}/>
          )
        })
      }
    </ul>
  );
}

export default PlantList;
