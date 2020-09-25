import React from 'react'
import {HiCurrencyDollar} from 'react-icons/hi'
import { useStateValue } from "./StateProvider"
import {FaGrinStars} from 'react-icons/fa'

function ProductDetails({id,title,price,rating,image}) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
      };

    return (
        <div className="product">
        <div className="product_info">
            <p>{title}</p>
            <p className='product_price'>
                <small className='currency'><HiCurrencyDollar/></small>
                <strong>{price}</strong>

            </p>
            <div className='product_rating'>
                {
                    Array(rating).fill().map((_)=>(
                        <span className='span_rating'><FaGrinStars/></span>
                    ))
                }
            </div>
        </div>
        <p>{image}</p>
        <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    )
}

export default ProductDetails
