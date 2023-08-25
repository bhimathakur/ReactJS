import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../utilities/appSlice";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../config";
import { cacheResults } from "../utilities/searchSlice";
import Logo from "../assets/logo.png";
import VideoContainer from "./VideoContainer";


const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => 
    {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchResults(searchQuery)
      }
    
    
  }, 2000);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

const getSearchResults = async(searchQuery) => {
  const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
  const json = await data.json();
  dispatch(cacheResults({
    [searchQuery]: json[1],
  }));
  setSuggestions(json[1]);
}
const navigate = useNavigate();
const searchResult = (result) => {
  
  
  navigate('search-result?q='+result);

}

  const isOpen = useSelector((store) => store.app.isMenuOpen);
   return (
            <div className="flex mb-4 bg-gray-100 shadow-lg pl-6">
  <div className="flex w-300">
    <img onClick={ () => dispatch(openMenu())}  width="35" height="35" alt="hamburgger" src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/256/external-mobile-application-hamburger-menu-setting-interface-basic-regular-tal-revivo.png" />
    <Link to="/">   
    <img className="pl-5 mt-5" data-testid="logo"   alt="logo" src={Logo} />
    </Link>
    
    </div>
  <div className="w-1/3 pt-5 rounded-full w-600 ml-64" id="searchSuggestions">
    <input className="w-60 h-8 rounded-l-[20px] border-2 border-gray-400 " type="text" name="search" data-testid="search-input"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    onFocus={() => setShowSuggestions(true)}
    onBlur={() => setShowSuggestions(false)}
        />
    <button  name="search" data-testid="search-btn" className="bg-gray-200 w-12 h-8 border-2 border-gray-400 rounded-r-[20px]">🔍</button>

    {
    showSuggestions &&
    <div className="fixed bg-slate-100 w-62" data-testid="suggestions-container">
    <ul data-testid="search-suggestions w-60">
      <li></li>
      {
        
        suggestions.map((suggestion, index) => 
        {
          return (
          <li className="cursor-pointer hover:bg-gray-200" onMouseDown={(e) => searchResult(suggestion) }>
            {suggestion}
          </li>
            )
        }
        )
      }
      
    </ul>
  </div>

    }
        </div>
    
  <div className="w-1/3 w-200 ml-64">
    <img width="80" data-testid="user-icon" height="80" alt="profile" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
  </div>
</div>
        
    );
}

export default Header;