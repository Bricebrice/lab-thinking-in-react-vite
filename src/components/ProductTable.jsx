import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  console.log("products are: ", products);
  // const products = props.products;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, id) => (
          <ProductRow key={id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
