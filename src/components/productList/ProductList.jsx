import React from 'react'
import Product from "../product/Product"
import "./productList.css"
import {products} from "../db/prod"
import {prodCat} from "../db/prodCategory"
import {selectId} from "../db/func"
import {showAll} from "../db/func"

const ProductList = () => {
  return (
      <div className='pl'>
          <div className="pl-texts">
              <h1 className='pl-title'>Market-Place.</h1>
          </div>
          <div className="cat-cont" >
              {prodCat.map((item) => (
                  <ul className='cat-ul'key={item.catId}>
                    <li className="cat-list" onClick={(e) => selectId(item.catId, e)}>{item.catDesc}</li>
                  </ul>
              ))}
              <li className='cat-all-list' onClick={() => showAll()}>
                All products
              </li>
              
          </div>
          <div className="pl-list" >
              {products.map((item) => (
              <Product key={item.id} icon={item.icon} name={item.name} price={item.price} category={item.catDesc} description={item.desc} id={item.id}/>
              ))}
          </div>
      </div>
  )
}

export default ProductList