    import {Link} from 'react-router-dom'
import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';
import Cards from './Cards';
    const Search = () => {
        const [items, setitems] = useState(null)
        const [categories, setCategories] = useState(null)
        const [isSBoxVisible, setSBoxVisible] = useState(false)
        const [pathL, setPathL] = useState(false)
        const location = useLocation();
        const isShopPage = location.pathname === '/shop';
        

        useEffect(() => {
            const fetchItems = async () => {
              const response = await fetch('https://fakestoreapi.com/products/')
              const json = await response.json()
              const cat = await fetch('https://fakestoreapi.com/products/categories') 
              const res= await cat.json()
              if (response.ok) {
                setitems(json)
              }
              if(cat.ok)
                setCategories(res)
            }
        
            fetchItems()
          }, [])

          const getRandomItems = (count) => {
            if (!items) {
              return [];
            }
        
            // Filter items by category: "men's clothing"
            const mensClothingItems = items.filter((item) => item.category === "women's clothing");
        
            // Shuffle and select the first `count` items
            const shuffledItems = mensClothingItems.sort(() => Math.random() - 0.5).slice(0, count);
        
            return shuffledItems;
          };

          const handleInputFocus = () => {
            setSBoxVisible(true);
          };
        
          const handleInputBlur = () => {
            setSBoxVisible(false);
          };
        return(
            <div className="container">
                <div className="logo">
                    <img src="https://dashboard.zevi.ai/0b4dc923ff09a3b3.png" />
                </div>
                <div className={`searchBar ${isShopPage ? 'updated-style-search' : ''}`}>
                <input
                    id="searchQueryInput"
                    type="text"
                    name="searchQueryInput"
                    placeholder="Search"
                    defaultValue=""
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    />
                    <Link to="/shop">
                      <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                          <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                          <path
                              fill="#666666"
                              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                          />
                          </svg>
                      </button>
                      </Link>
                </div>
                <div className={`s-box ${isSBoxVisible?'make-visible':''} ${isShopPage ? 'updated-style-s-box' : ''}`}>
                    <div className='box-title'>
                        Latest Trends
                    </div>
                    <div className='card-box'>
                    {getRandomItems(5).map((item, index) => (
            <Cards key={index} detail={item} />
          ))}
                        
                    </div>
                    <div className='pop-suggestion'>
                        <p id='p-title'>Popular suggestion</p>
                        {categories && categories.slice(0, 5).map((item, index) => (
            <div key={index}>{item.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</div>
          ))}
                    </div>
                </div>
            </div>
        );
    }
    export default Search;