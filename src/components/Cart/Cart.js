import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h3>order summary </h3>
            <p>Selected Items: {props.cart.length}</p>
        </div>
    );
};

export default Cart;