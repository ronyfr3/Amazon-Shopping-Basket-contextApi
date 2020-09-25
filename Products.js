import React from 'react'
import ProductDetails from './ProductDetails'

function Products() {
    return (
        <div className="home">
        <div className="home_row">
        <ProductDetails
                id='1'
                title='product 01'
                price={11.50}
                rating={5}
                image='Image01'
              
            />
        <ProductDetails
                id='2'
                title='product 02'
                price={7.5}
                rating={3}
                image='Image02'
                
            />
          </div>
        </div>
    )
}

export default Products
