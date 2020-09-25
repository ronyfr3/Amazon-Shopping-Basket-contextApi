import React from 'react'
import {Link} from 'react-router-dom'
import {BiBasket} from 'react-icons/bi'
import {useStateValue} from './StateProvider'

function Header() {
    const [{basket}] =useStateValue()
    return (
        <nav className='nav'>
        <Link to='/products' className='nav_link'>Your Shopping Basket</Link>
            <Link to='/checkout'>
                <div className='nav_div'>
                    <BiBasket/>
                    <span className='nav_span'>{basket?.length}</span>
                    {/* initial of beginning to add products to basket you need to add small fraction of time where it takes time to initialize, thats why we add this [basket(->?<-).length] */}
                </div>
            </Link>
        </nav>
    )
}

export default Header
