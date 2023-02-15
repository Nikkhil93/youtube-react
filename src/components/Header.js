import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";

import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";
import SearchSuggestions from './SearchSuggestions'

import HAMBURGER_MENU from '../logos/three-horizontal-lines-outline-icon.svg'
import YOUBTUBE_LOGO from '../logos/youtube-logo.svg';
import SEARCH_ICON from '../logos/search-line-icon.svg';
import USER_ICON from '../logos/user-profile-icon.svg';


const Header = () => {
  const dispatch = useDispatch();
  const toggleNavigationElement = () => {
    dispatch(toggleMenu());
  }

  
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const valueChanged = (event) => {
    setSearchQuery(event);
    !showSuggestions && setShowSuggestions(true);
  }



  return (
    <div className='grid grid-flow-col mt-2 sticky top-0 bg-white'>
        <div className='flex items-center'>
          <img
              className='ml-4 mr-4 h-11 cursor-pointer p-2 rounded-full hover:bg-gray-200'
              alt="menu"
              src= {HAMBURGER_MENU}
              onClick = {() => toggleNavigationElement()}
            />
            <a href="/">
              <img
                className='h-6 cursor-pointer'
                alt="logo"
                src= {YOUBTUBE_LOGO}
              />
            </a>
        </div>
      <div className="col-span-12 px-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => valueChanged(e.target.value)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 pt-2.5 pb-3.5 rounded-r-full bg-gray-100">
            <img
              className='h-4 cursor-pointer'
              alt="logo"
              src= {SEARCH_ICON}
            />
          </button>
        </div>

        {showSuggestions && searchQuery.length>0 ? (
          <SearchSuggestions suggestions={suggestions}/>
        ): null}
      </div>
      <div className="col-span-1 flex items-center">
        <img
          className="h-9"
          alt="user"
          src={USER_ICON}
        />
      </div>
        
    </div>
  )
}

export default Header