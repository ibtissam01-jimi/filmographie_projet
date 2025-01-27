/*import React from "react";
const SortButtons =()=>{
    return(
        <div>
            <button type="button">Trie par Note</button>
            <button type="button">Trie par annee</button>
        </div>
    )
}

export default SortButtons;*/
const SortButtons = ({ onSort }) => (
    <div>
      <button onClick={() => onSort("rating")}>Trier par note</button>
      <button onClick={() => onSort("releaseYear")}>Trier par année</button>
    </div>
  );
  
  export default SortButtons;
  