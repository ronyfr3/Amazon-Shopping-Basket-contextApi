import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket}] = useStateValue();

  return (
    <div className="checkout">
    {basket?.length===0?(
    
      <h3 className="empty_basket"> <span className="span_empty">Empty Basket?</span>You Need to Add Something to Purchase</h3>
    ):(
      <div className="checkout__left">


        <div>
          <h2 className="checkout__title">Your shopping Basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

        </div>
      </div>
      )}
      <div className="checkout__right">
        <Subtotal />
      </div>
      
    </div>
  );
}

export default Checkout;