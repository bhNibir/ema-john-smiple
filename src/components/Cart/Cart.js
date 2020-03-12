import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const totalPrice = cart.reduce((total, product)=> total+product.price,0)
    return (
        <div>
            <h3>Order Summary</h3>
    <h5>Items ordered: {cart.length}</h5>
    <p>Items:{totalPrice}</p>
            <p>Shipping & Handling:</p>
            <p>Total before tax:</p>
            <h3>Order Total:</h3>
        </div>
    );
};

export default Cart;