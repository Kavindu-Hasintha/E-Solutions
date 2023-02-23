import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import logo from "./logo.svg";
//import "./App.css";

// Testing Github

import LoginPage from "./pages/usersPage/LoginPage";
import SuperAdminPage from "./pages/usersPage/SuperAdminPage";
import AdminPage from "./pages/usersPage/AdminPage";
import PartnerPage from "./pages/usersPage/PartnerPage";

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/superadmin/:id/*" element={<SuperAdminPage />} />
        <Route path="/admin/:id/*" element={<AdminPage />} />
        <Route path="/partner/:id/*" element={<PartnerPage />} />
      </Routes>
    </div>
  );
}

export default App;
