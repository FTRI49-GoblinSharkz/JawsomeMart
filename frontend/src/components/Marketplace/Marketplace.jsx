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
const Marketplace = (  ) => {
    
    // Creates state array to store Product components
    const [displayedProducts, setDisplayedProducts] = useState([]);

    // Creates a new array to hold all products returned from db
    // const allProducts = [];

    // Function that sends a "GET" request to the DB to fetch product data

    const getComponents = () => {
        // {FilterItems} prop for get componenet

        // Sends a "GET" request for products stored in db
        axios.get('/api/products')
            .then(res => {

                // Function that changes the state of products array
                setDisplayedProducts(() => {

                    // Saves the current array in newProducts
                    const newProducts = [];
                    const arr = res.data;
                    // Pushes product components to an array passing in data as props
                    for (let i = 0; i < arr.length; i++) {
                        const newProduct = (<Product
                            key = {crypto.randomUUID()}
                            product_id={arr[i]._id}
                            id={arr[i].id}
                            title={arr[i].title}
                            price={arr[i].price} 
                            category={arr[i].category}
                            description={arr[i].description}
                            image={arr[i].image}
                            rating={arr[i].rating}
                            stock={arr[i].stock}
                            num_sold={arr[i].num_sold}
                        />);

                        // Pushes each product into allProducts array and displayedProducts arr
                        newProducts.push(newProduct);
                        // allProducts.push(newProducts);
                    }
                    return newProducts;
                });
            })

            // Catches any errors during our get request and displays a message box with the error
            .catch(e => {
                
                alert(e);
            })
    };

    // Calls the getComponents function so we can render the products
    useEffect(() => {
        getComponents();
        console.log("hit")
    }, []);

    // Returns a styled div containing the rendered products
    //
    return (
        <div>
            {/* <Form>
                <InputGroup classname = 'searchInput'>
                < input type='text' placeholder='Enter item here...' onChange={FilterItems}></input>
                <Form Control   
                onchange{(e)=>{ () =>{

                }                 
                }}
                 />

                </InputGroup>
                </Form> */}
                
            <Search displayedProducts = {displayedProducts} setDisplayedProducts = { setDisplayedProducts } getComponents = { getComponents }/>
           
            <div className="product-display">
                { displayedProducts }
            </div>
        </div>
    );
};

// Exports the Marketplace function
export default Marketplace;