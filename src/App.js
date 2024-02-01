//////////////////////
import { Route, Routes } from "react-router-dom";
// 1- Auth
import SignUp from "./pages/website/Auth/SignUp";
import Login from "./pages/website/Auth/Login";
// 2- Website
import Home from "./pages/website/Home";
import About from "./pages/website/About";
import Contact from "./pages/website/Contact";
// 3- Dashboard
import Dashboard from "./pages/dashboard/Dashboard";
// 4- Users
import Users from "./pages/dashboard/users/Users";
import UpdateUser from "./pages/dashboard/users/UpdateUser";
import CreateUser from "./pages/dashboard/users/CreateUser";
// 5- Component For Protected Routes
import RequireAuth from "./pages/website/Auth/RequireAuth";
// n- CSS
import "./style.css";
import "./all.min.css";
import PersistLogin from "./pages/website/Auth/PersistLogin";
import Products from "./pages/dashboard/products/Products";
import CreateProduct from "./pages/dashboard/products/CreateProduct";
import UpdateProduct from "./pages/dashboard/products/UpdateProduct";
//////////////////////

function App() {
  //
  return (
    <>
      <Routes>
        {/* ----- Public Routes ----- */}
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* ----- Protected Routes ----- */}
        <Route element={<PersistLogin />}>
          <Route path="/" element={<Home />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="users" element={<Users />} />
              <Route path="user/create" element={<CreateUser />} />
              <Route path="users/:id" element={<UpdateUser />} />
              <Route path="products" element={<Products />} />
              <Route path="product/create" element={<CreateProduct />} />
              <Route path="products/:id" element={<UpdateProduct />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
