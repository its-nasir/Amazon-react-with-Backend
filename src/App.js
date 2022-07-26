import "./App.css";
import Header from "./Header";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import commerce from "./lib/commerce";
import { useEffect, useState } from "react";

function App() {
  const [productsList,setProductsList] =useState([]);
  const fetchProducts = async()=>{
    const response = await commerce.products.list();
    setProductsList(response.data)
  }
  useEffect(()=>{
    fetchProducts()
  },[])



  return (
      <div className="App">
        <Header />
    <Routes>
          <Route path="/" element={<Product productsList={productsList} />} />
          <Route path="/cart" element={<ShoppingCart/>} />
    </Routes>
      </div>
  );
}

export default App;
