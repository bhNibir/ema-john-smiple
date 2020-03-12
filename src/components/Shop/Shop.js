import React, { useState } from 'react';
import fakeData from '../../fakeData/index'
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10)
    const [cart, setCart] = useState([])
    
    const handelAddCart = (product)=>{
        console.log(product);
        const newCart = [...cart, product]
        setCart(newCart)
        
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(product => <Product product= {product} handelAddCart= {handelAddCart}></Product>)
                    }
            </div>
            <div className="chart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;