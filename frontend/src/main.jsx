import { BrowserRouter, Routes, Route } from "react-router";
import axios from "axios";
import FoodDashboard from "./Admin/Food";
import Home from "./Pages/Home";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import { FoodProvider } from './Context/FoodContext';
import { UserProvider } from "./Context/User";
import AdminRoute from "./Components/AdminRoute";

import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'

axios.defaults.withCredentials = true;

createRoot(document.getElementById('root')).render(

  <UserProvider>
    <FoodProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin-food" element={
            <AdminRoute>
              <FoodDashboard />
            </AdminRoute>
          } />

          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </FoodProvider>
  </UserProvider>
)
