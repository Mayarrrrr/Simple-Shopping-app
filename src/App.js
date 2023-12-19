import "./App.css";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import NavBar from "./components/navbar/NavBar";
import ShoppingContextProvider from "./context/ShoppingContext";
import Setting from "./components/setting/Setting";
import './i18n';

function App() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    setCurrentTheme(localStorage.getItem("theme") ?? "light");
  }, []);
  return (
    <div className={`App ${currentTheme}`}>
      <ShoppingContextProvider>
      <NavBar/>
       <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/cart" element={<Cart/>} />
          <Route exact path="/setting" element={<Setting/>} />
      </Routes>
      </BrowserRouter>
      </ShoppingContextProvider> 
    </div>
  );
}

export default App;
