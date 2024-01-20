import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Admin from "./components/Admin";
import Menu from "./components/Menu";
import Order from "./components/Order";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function addProduct(newProduct) {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    data.push(newProduct);
    localStorage.setItem("menu", JSON.stringify(data));
  }

  function readProduct() {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    setData(data);
  }

  function deleteProduct(id) {
    let data = JSON.parse(localStorage.getItem("menu")) || [];
    let deleteData = data.filter((el) => el.id !== id);
    localStorage.setItem("menu", JSON.stringify(deleteData));
    readProduct();
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/admin" element={<Admin addProduct={addProduct} />} />
        <Route
          path="/menu"
          element={
            <Menu
              deleteProduct={deleteProduct}
              readProduct={readProduct}
              data={data}
            />
          }
        />

        <Route path="/orders" element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
