// Importing required dependencies
import * as cartService from '../../services/cartService.js';

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

    // function that will render the product page when title of product is clicked
    const renderProductPage = () => {
        return (
            <Product />
        )
    }

    // Returns a product div to be rendered in the marketplace
    return (
        <div className="product-box" onClick={renderProductPage}>

            <h3 className="h-3">
                {props.title}
            </h3>


            <div className="image-container">            
                <img src={props.image}/>
            </div>

            <h4 className='text-bold'>
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