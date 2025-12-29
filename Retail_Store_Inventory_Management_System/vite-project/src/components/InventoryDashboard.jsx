import { useContext } from "react";
import { InventoryContext } from "../context/InventoryContext";

const InventoryDashboard = () => {
  const { products } = useContext(InventoryContext);

  return (
    <div>
      <h2>Inventory Dashboard</h2>

      {products.map(p => (
        <p key={p.id}>
          {p.name} — {p.stock < 3 ? "⚠ Low Stock" : "In Stock"}
        </p>
      ))}
    </div>
  );
};

export default InventoryDashboard;
