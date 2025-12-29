import { useContext, useState } from "react";
import { InventoryContext } from "../context/InventoryContext";

const TransferForm = () => {
  const { dispatch } = useContext(InventoryContext);
  const [id, setId] = useState("");
  const [qty, setQty] = useState("");

  const submit = (e) => {
    e.preventDefault();
    dispatch({ type: "TRANSFER", payload: { id: Number(id), qty: Number(qty) } });
    alert("Stock transferred");
  };

  return (
    <form onSubmit={submit}>
      <h2>Transfer Stock</h2>
      <input placeholder="Product ID" onChange={(e) => setId(e.target.value)} />
      <input placeholder="Quantity" onChange={(e) => setQty(e.target.value)} />
      <button>Transfer</button>
    </form>
  );
};

export default TransferForm;
