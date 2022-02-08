import React,{useState} from "react";

function Item({ name, category }) {
    const [inCart,setInCart]=useState(true)

    function handleCart() {
        setInCart((inCart)=>inCart= !inCart)
    }
    const cartClass = inCart ? "" : "in-cart"
    const buttonName = inCart ? "add" : "remove"
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={buttonName} onClick={handleCart}>
        {inCart ? "Add to" : "Remove From"} Cart</button>
    </li>
  );
}

export default Item;
