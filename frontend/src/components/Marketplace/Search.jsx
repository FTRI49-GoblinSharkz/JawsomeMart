import React from 'react'
import { useState } from 'react';

export default function Search( { displayedProducts, setDisplayedProducts, getComponents} ) {
    const [search, setSearch] = useState('') 


    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        console.log('reacehd handle search')
        // update search state to match the input
        setSearch(query);
       
        // filter over the current state (displayedProducts) for only the things strictly equal to state(search)
// cases    
        //case1: searchquery is empty 
        // if (e.target.value === '') setSearch(getComponents())
        if (query === '') {
            setDisplayedProducts(getComponents());
            return;
        }
        //case 2 : returns some itmes mathcing the query but not all 
        if(porps.)


        //case3 : if they search something and nothing shows up
        //not reutnring any 
        if (results.length === 0) console.log('No items matching search.')

        let results = displayedProducts.filter((ele)=>{

        return ele.props.title.toLowerCase().includes(e.target.value.toLowerCase())
        })

    setDisplayedProducts(results);
    }
  return (
    <div>
        <input type='text' 
        placeholder='Enter Item Here' 
        value={search} onChange={ (e) => {handleSearch(e)}}>

        </input>
    </div>
  )
}
