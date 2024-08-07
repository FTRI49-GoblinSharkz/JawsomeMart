// Importing required dependencies
import React from 'react';
import { useState } from 'react'
import * as cartService from '../../services/cartService.js';
import Popup from './Popup.jsx';

/** 
 * This function takes properties passed from a parent and generates
 * a div to display the data
*/
const Product = (props) => {
    const objID = props.product_id;


    // Function that allows users to add an item to their cart
    const addProductToCart = () => {

        // Calls imported function, passing in Object ID
        cartService.add({id: objID})
            .then(() => {  
                alert('Item added to cart!');
            })
    }
    // Returns a product div to be rendered in the marketplace
    return (
        <div className="product-box">

            <h3>
                {props.title}
            </h3>

            <div className="image-container">            
                <img src={props.image}/>
            </div>


            <h4>
                ${props.price} USD
                <button onClick={ addProductToCart }>
                    Add to Cart
                </button>
                <button>CLICK HERE</button>
              
            </h4>

        </div>
    )
}

// Exports the Product constructor
export default Product;