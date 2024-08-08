/**
 * This file represents a marketplace page on our e-commerce website.
 * This page will render nested components such as listed items, navigation bar, and the shopping cart.
 * 
 * @returns - The components to be rendered
 * @exports Marketplace - Function to be used by other files
 */

// Importing necessary tools
import { InputGroup , Form, useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product.jsx';
import Search from './Search.jsx';

// Importing CSS file
import './Marketplace.css';

// Defines our Marketplace function to be exported
const Marketplace = () => {
    // Creates state array to store Product components
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [allProducts, setAllProducts] = useState([]); // Vince implemented

    // Function that sends a "GET" request to the DB to fetch product data
    const getComponents = () => {
        axios.get('/api/products')
            .then(res => {
                // Function that changes the state of products array
                const newProducts = res.data.map(product => (
                    <Product
                        key={crypto.randomUUID()} // Vince implemented
                        product_id={product._id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        category={product.category}
                        description={product.description}
                        image={product.image}
                        rating={product.rating}
                    />
                ));
                setAllProducts(newProducts); // Vince implemented
                setDisplayedProducts(newProducts); // Vince implemented
            })
            .catch(e => {
                alert(e);
            });
    };

    // Calls the getComponents function so we can render the products
    useEffect(() => {
        getComponents();
        console.log("hit");
    }, []);

    // Returns a styled div containing the rendered products
    return (
        <div>
            <Search 
                allProducts={allProducts} // Vince implemented
                displayedProducts={displayedProducts} 
                setDisplayedProducts={setDisplayedProducts} 
                getComponents={getComponents} 
            />
            <div className="product-display">
                {displayedProducts}
            </div>
        </div>
    );
};

// Exports the Marketplace function
export default Marketplace;


/* =======================================================
In-Source Test
=======================================================*/

if (import.meta.vitest) {
    const { it, expect } = import.meta.vitest

if (import.meta.vitest) {
        const displayedProductsArray = container.querySelector('.product-display').childNodes;
        expect(Array.isArray(Array.from(displayedProductsArray))).toBe(true);
    }
    // Print the rendered output to the console for debugging
  screen.debug();
}