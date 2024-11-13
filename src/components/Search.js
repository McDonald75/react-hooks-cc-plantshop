import React, { useContext, useEffect, useState } from "react";
import { Context } from "./context";

function Search() {
  const {values, setValues} = useContext(Context)
  const {initValues, setInitValues} = useContext(Context)
  
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => {
          let word = e.target.value
          let newValues = initValues.filter(l=>l.name.toLowerCase().includes(word.toLowerCase()))
          setValues(newValues)
        }}
      />
    </div>
  );
}

export default Search;
