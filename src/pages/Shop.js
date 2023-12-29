
import Search from '../components/Search'
import Filter from '../components/FilterSection.js'
import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import Filtersection from '../components/FilterSection.js'
import Shopcard from '../components/Shopcard.js'

import logo1 from '../Images/1s.png'
import logo2 from '../Images/2s.png'
import logo3 from '../Images/3s.png'
import logo4 from '../Images/4s.png'
import logo5 from '../Images/5s.png'

const Shop= () =>{

    const[categories, setCategories]= useState(null)
    const[items, setItems] = useState(null)
    const price=["less than 500","500 - 10000"]
    const rating=[logo5,logo4,logo3,logo2,logo1]
    useEffect(()=>{
        const fetchItems = async() =>{
            const cat = await fetch('https://fakestoreapi.com/products/categories') 
            if(cat.ok){
                setCategories(await cat.json())
            }
            const it = await fetch('https://fakestoreapi.com/products/')
            if(it.ok){
                setItems(await it.json());
            }
            console.log(items)
        };
        fetchItems();
    },[])

    return(
        <div className="shop-box">
            <Search />
            <div id="mart">
                <div id="side-section">
                    <div id='search-res'>Search Results</div>
                    <div className='sidebar'>
                        <Filtersection head={"CATEGORIES"} data={categories}/>
                        <Filtersection head={"PRICE RANGE"} data={price}/>
                        <Filtersection head={"RATINGS"} data={rating} />
                    </div>
                </div>
                <div className='shopcard'>
                    {items && items.map((item)=>
                        <Shopcard key={item.id} data={item} rate={rating}/>
                    )} 

                </div>

             </div>            
        </div>
    )
}

export default Shop;