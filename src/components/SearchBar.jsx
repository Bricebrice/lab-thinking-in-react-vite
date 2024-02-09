function SearchBar() {
  return (
    <div>
      <p>Search</p>
      <input name="searchInput" />
      <br />
      <label>
        <input type="checkbox" name="myCheckbox" /> Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
