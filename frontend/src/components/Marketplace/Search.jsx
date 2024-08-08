// Search.jsx

import React, { useState } from 'react';
import './Search.css';

export default function Search({ allProducts, displayedProducts, setDisplayedProducts }) { // Vince implemented
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearch(query);

        if (query === '') {
            setDisplayedProducts(allProducts); // Vince implemented
            return;
        }

        const results = allProducts.filter(product => 
            product.props.title.toLowerCase().includes(query.toLowerCase()) // Vince implemented
        );

        if (results.length === 0) {
            console.log('No items matching search.');
        }

        setDisplayedProducts(results);
    };

    return (
        <div>
            <input 
                className='searchbar'
                type='text'
                placeholder='Search Item Here...'
                value={search}
                onChange={handleSearch}
            />
        </div>
    );
}