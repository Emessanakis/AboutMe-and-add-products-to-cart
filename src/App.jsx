import React from "react";
import About from "./components/about/About";

import Intro from "./components/introduction/Intro";
import "./app.css";
import Contact from "./components/contact/Contact";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainComp from "./MainComp";
import Cartpop from "./components/cartPopup/Cartpop";
import "./AppTopBar.css";
import Cart from "./components/img/cart.jpg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "./components/productList/ProductList";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <div className="app">
        <div className="topbar">
          <div className="wrapper">
            <div className="left">
              <Link to="intro/" className="lbl">
                <h1>Web Dev.</h1>
              </Link>
            </div>
            <div className="right">
              <Link to="../" className="nav-bt">
                Home
              </Link>
              <Link to="../about/" className="nav-bt">
                About
              </Link>
              <Link to="../marketplace/" className="nav-bt">
                Market
              </Link>
              <Link to="../contact/" className="nav-bt">
                Contact
              </Link>
              <button
                onClick={() => setButtonPopup(true)}
                className="cart-btn "
              >
                <img src={Cart} alt="" className="cart-img" />
              </button>
            </div>
          </div>
          <Cartpop trigger={buttonPopup} setTrigger={setButtonPopup}></Cartpop>
        </div>
        <div>
          <Routes>
            <Route path="/" element={<MainComp />} />
            <Route path="/portofolio" element={<MainComp />} />
            <Route path="/about" element={<About />} />
            <Route path="/marketplace" element={<ProductList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/intro" element={<Intro />} />
          </Routes>
        </div>
    </div>
  );
}

export default App;
