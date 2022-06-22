import {products} from "../db/prod"

let newProducts = [];
let totPrice = 0;

function selectId(cid){

  let i=0;

  for(i=0; i < products.length; i++) {
      if (products[i].catId === cid) {
          document.getElementsByClassName("p")[i].style.display ="inline-block";                 
      }
      else {
          document.getElementsByClassName("p")[i].style.display ="none";
      }
  }
}

export {selectId};

function showAll(){
    let i=0;

    for(i=0; i < products.length; i++) {
    document.getElementsByClassName("p")[i].style.display ="inline-block";
    }
}
export {showAll};

function updateCart(cid){

    let i = 0;
    let prodCn = document.getElementsByClassName("p");   

    for(i=0; i < products.length; i++) {
        if(prodCn[i].id == cid){
            newProducts.push(products[i]);
            prodCn[i].style.display = "none";
            totPrice = totPrice + products[i].price;
            console.log(totPrice)
        }
    }
    console.log(newProducts)
}

function delFromCart(cid){

    let i = 0;
    let moveId = document.getElementsByClassName("p-item-cont");
    let tPrice = document.getElementsByClassName("p-total-price1");
    let findPos = (element) => element.id === newProducts[i].id;

    for(i=0; i < newProducts.length; i++) {
        if(newProducts[i].id == cid){            
            moveId[i].style.display = 'none';
            let specProd = newProducts.findIndex(findPos)
            totPrice = totPrice - newProducts[i].price;
            newProducts.splice(specProd, 1)

            console.log(newProducts)
            console.log(totPrice)
        }
    }
}

function lengthRange(inputtxt, minlength, maxlength)
{  	
   var userInput = inputtxt.value;  
   if(userInput.length >= minlength && userInput.length <= maxlength)
      {  	
        return true;  	
      }
   else
      {  	
	alert("Please input between " +minlength+ " and " +maxlength+ " characters");  		
        return false;  	
      }  
}

export {lengthRange};
export {totPrice};
export {delFromCart};
export {updateCart};
export {newProducts};


