import { useState } from "react";
import jsonData from "./../data.json";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function ProductsPage() {
  const [products, setProducts] = useState(jsonData);

  // Filter products
  // Function filterProducts accepts two arguments
  const filterProducts = (str, isInStock) => {
    let productsCopy = [...jsonData];

    // first filter by input string
    if (str !== "") {
      productsCopy = productsCopy.filter((product) => {
        return product.name.includes(str);
      });
    }

    // second filter by checkbox
    if (isInStock) {
      productsCopy = productsCopy.filter((product) => {
        return product.inStock;
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
