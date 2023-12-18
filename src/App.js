import "./App.css";
import Cart from "./components/cart/Cart";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import ShoppingContextProvider from "./context/ShoppingContext";
import Setting from "./components/setting/Setting";
import './i18n';

function App() {
  return (
    <div className="App">
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
