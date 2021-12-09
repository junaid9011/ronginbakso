import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart[cart.length])
    return (
        <div>
            <p>countered:{cart.length}</p>
            <table border='1'>
               <tr>
               {
                 cart.map(nm=><tr><td>{nm.name}</td></tr>)
                }
            </tr>
            </table>
            
        </div>
    );
};

export default Cart;