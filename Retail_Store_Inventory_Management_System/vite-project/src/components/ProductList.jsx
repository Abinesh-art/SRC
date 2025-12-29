import { useContext, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { products } = useContext(InventoryContext);
  const [search, setSearch] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Product List</h2>
      <SearchBar setSearch={setSearch} />

      {filtered.map(p => (
        <div key={p.id}>
          <Link to={`/product/${p.id}`}>{p.name}</Link> – Stock: {p.stock}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
