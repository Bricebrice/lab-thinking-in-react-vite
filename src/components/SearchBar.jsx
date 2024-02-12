import { useState } from "react";

function SearchBar(props) {
  const [searchItem, setSearchItem] = useState("");
  const [isInStock, setIsInStock] = useState(false);

  const handleSearch = (e) => {
    const searchedItem = e.target.value;
    props.filteredProducts(searchedItem);
    setSearchItem(searchedItem);
  };

  const handleCheckbox = () => {
    console.log("Is in stock?: ", !isInStock);

    props.filteredProducts(searchItem, !isInStock);
    setIsInStock(!isInStock);
  };

  return (
    <div>
      <p>Search</p>
      <input name="searchInput" value={searchItem} onChange={handleSearch} />
      <br />
      <label>
        <input
          type="checkbox"
          name="myCheckbox"
          checked={isInStock}
          onChange={handleCheckbox}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
