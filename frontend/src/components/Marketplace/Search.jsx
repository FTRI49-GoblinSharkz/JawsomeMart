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
        //case1: searchquery is emptgit  
        // if (e.target.value === '') setSearch(getComponents())
        if (query === '') {
            setDisplayedProducts(getComponents());
            return;
        }


        let results = displayedProducts.filter((ele)=>{

        return ele.props.title.toLowerCase().includes(e.target.value.toLowerCase())
        })

        //edge case 3 : Check and log when query returns 0 matching results 
         if(results.length === 0){ 
            // console.log('No items matching search.');
         }

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
