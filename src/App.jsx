import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Transactions from './pages/Transactions';
import Messages from './pages/Messages';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // Your logic to check if the user is authenticated

  return (
    <>
    <ToastContainer/>
    <Router>
      <Routes>
        <Route index element={<Login />} />

        {/* Main layout with authentication required */}
        <Route
          path="/"
          element={<Layout />}
        >
          <Route path="product" element={<Product />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="messages" element={<Messages />} />
        </Route>

        {/* Login page */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
