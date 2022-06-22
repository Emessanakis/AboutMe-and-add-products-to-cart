import React from 'react'
import About from './components/about/About'
import Intro from './components/introduction/Intro'
import ProductList from './components/productList/ProductList'
import "./app.css";
import Contact from './components/contact/Contact'

function MainComp () {
  return (
    <div className="app">
      <div className="sections">
        <Intro />
        <About />
        <ProductList />
        <Contact />
      </div>
    </div>
  )
}

export default MainComp