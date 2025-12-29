import { useParams } from "react-router-dom";
import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(InventoryContext);

  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>SKU: {product.sku}</p>
      <p>Price: ₹{product.price}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
};

export default ProductDetails;
