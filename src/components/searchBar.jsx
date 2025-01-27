/*import React from "react";
const SearchBar=()=>{
    return(
        <div>
            <input type="text" placeholder="Chercher Un Film" />
        </div>
    )

}

export default SearchBar;*/
const SearchBar = ({ onSearch }) => (
    <input
      type="text"
      placeholder="Rechercher un film..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
  
  export default SearchBar;
  