import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import InventoryDashboard from "./components/InventoryDashboard";
import ProductDetails from "./components/ProductDetails";
import TransferForm from "./components/TransferForm";
import { InventoryProvider } from "./context/InventoryContext";

function App() {
  return (
    <InventoryProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Products</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/transfer">Transfer</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/dashboard" element={<InventoryDashboard />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/transfer" element={<TransferForm />} />
        </Routes>
      </BrowserRouter>
    </InventoryProvider>
  );
}

export default App;
