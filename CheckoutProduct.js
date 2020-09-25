import React from 'react';
import {FaGrinStars} from 'react-icons/fa'
import {HiCurrencyDollar} from 'react-icons/hi'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }


    return (
        <div className='checkoutProduct'>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small className='currency'><HiCurrencyDollar/></small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {
                    Array(rating).fill().map((_)=>(
                        <span className='span_rating'><FaGrinStars/></span>
                    ))
                }
                <p>{image}</p>
                </div>
               
                {!hideButton && (
                    <button onClick={removeFromBasket}>Remove from Basket</button>
                )}
            </div>
        </div>
    )
}

export default CheckoutProduct