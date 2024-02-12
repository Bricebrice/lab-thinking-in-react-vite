import { useState } from "react";

function SearchBar(props) {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
    const searchedItem = e.target.value;
    props.filteredProducts(searchedItem);
    setSearchItem(searchedItem);
  };

  return (
    <div>
      <p>Search</p>
      <input name="searchInput" value={searchItem} onChange={handleSearch} />
      <br />
      <label>
        <input type="checkbox" name="myCheckbox" /> Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
