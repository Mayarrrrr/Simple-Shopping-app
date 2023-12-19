import React, { useEffect, useState } from "react";
import axios from "axios";
import Items from "../items/Items";
import './home.css';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    setCurrentTheme(localStorage.getItem("theme") ?? "light");
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Items products={products} />
    </div>
  );
};

export default Home;
