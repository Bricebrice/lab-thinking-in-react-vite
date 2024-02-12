import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  // Filter products
  const filterProducts = (str) => {
    let productsCopy;
    if (str === "") {
      productsCopy = [...jsonData];
    } else {
      productsCopy = jsonData.filter((product) => {
        return product.name.includes(str);
      });
    }
    setProducts(productsCopy);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar filteredProducts={filterProducts} />
      <ProductTable products={products} />
    </div>
  );
}

export default ProductsPage;
