import "./product.css"
import React from 'react'
import "../productList/ProductList"
import {updateCart} from "../db/func"

function Product({icon, name, price, id}) {
  return (
      <div className="p" id={id}>
        <img src={icon} alt={name} className="p-img"/>
        <p className="p-name">{name}</p>
        <p className="p-price">{price} $</p>
        <button className="btnAdd" onClick={(e) => updateCart(id, e)}><p>Add</p></button>
      </div>
  )
}

export default Product