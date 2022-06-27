import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Shared/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Shared/NotFound/NotFound";
import Inventory from "./Pages/Home/Inventory/Inventory";
import Login from "./Pages/Login/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Register from "./Pages/Login/Register/Register";
import ManageInventoryes from "./Pages/ManageInventoryes/ManageInventoryes";
import AddNewItem from "./Pages/AddNewItem/AddNewItem";
import MyItems from "./Pages/MyItems/MyItems";
import Blog from "./Pages/Blog/Blog";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <Inventory></Inventory>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/manageInventory"
          element={
            <RequireAuth>
              <ManageInventoryes></ManageInventoryes>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/additem"
          element={
            <RequireAuth>
              <AddNewItem></AddNewItem>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/myitems"
          element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }
        ></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
