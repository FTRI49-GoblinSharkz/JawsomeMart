// Importing required dependencies
import * as cartService from '../../services/cartService.js';
// import axios from 'axios';

/** 
 * This function takes properties passed from a parent and generates
 * a div to display the data
*/
const Product = (props) => {
    const objID = props.product_id;


    // Function that allows users to add an item to their cart
    const addProductToCart = () => {
        // Sends a "POST" request to DB with product's ID to be stored in user's cart
        // axios.post('/api/cart', objID)
        //     // Upon receiving a response, lets user know they added an item to their cart
        //     .then(res => {
        //         console.log(res);
        //         if (res.status === 200) alert('Item successfully added to cart!');
        //     })

        //     // Catches any errors while sending post request
        //     .catch(e => {
        //         console.log(e);
        //     })
        // return;
        cartService.add({id: objID});
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
                {/* Item Category: { props.category } */}
            </h4>

            {/* <div className="description-box">
                {props.description}
            </div> */}


        </div>
    )
}

// Exports the Product constructor
export default Product;